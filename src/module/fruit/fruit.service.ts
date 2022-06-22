import { PrismaService } from '@/common/prisma/prisma.service';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { create } from 'domain';
import e from 'express';
import slugify from 'slugify';
import { CreateFruitDto } from './dto/create_fruit.dto';

@Injectable()
export class FruitsService {
  constructor(private readonly prisma: PrismaService) {}

  async addFruit({ images, ...fruit }: CreateFruitDto) {
    try {
      const newFruit = await this.prisma.fruit.create({
        data: {
          ...fruit,
          slug: slugify(fruit.name, {
            lower: true,
            replacement: '_',
            trim: true,
          }),
          images: {
            create: images.map((image) => ({ url: image })),
          },
        },
      });

      return newFruit;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException();
        }
      }

      throw error;
    }
  }

  async getFruits() {
    return this.prisma.fruit.findMany();
  }

  async getFruitBySlug(slug: string) {
    const fruit = await this.prisma.fruit.findUnique({
      where: { slug },
      include: { images: true },
    });
    if (!fruit) throw new NotFoundException();
    return fruit;
  }

  async deleteFruitBySlug(slug: string) {
    try {
      await this.prisma.fruit.delete({ where: { slug } });

      return { message: 'delete success' };
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException();
        }
      }

      throw error;
    }
  }
}
