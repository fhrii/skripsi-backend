import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import isFileImage from '@/utils/isFileImage';
import axios from 'axios';
import * as FormData from 'form-data';
import { DetectedFruit } from '@/common/type/detected_fruit.type';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class DetectorService {
  constructor(
    private readonly configService: ConfigService,
    private readonly prismaService: PrismaService,
  ) {}

  async detect(file: Express.Multer.File) {
    if (isFileImage(file)) {
      const formData = new FormData();
      formData.append('image', file.buffer, {
        filename: file.originalname,
        contentType: file.mimetype,
      });

      const response = await axios.post<DetectedFruit[]>(
        `${this.configService.get<string>('app.ML_SERVER')}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      const fruit = response.data.map(({ name }) => name);
      const filteredFruit = fruit.filter(
        (f1, index) => fruit.findIndex((f2) => f1 === f2) === index,
      );

      if (filteredFruit.length < 1) throw new NotFoundException();

      const mainFruit = await this.prismaService.fruit.findUnique({
        where: { slug: filteredFruit[0] },
        include: { images: true },
      });

      filteredFruit.shift();

      return { fruit: mainFruit, otherFruits: filteredFruit };
    } else {
      throw new BadRequestException();
    }
  }
}
