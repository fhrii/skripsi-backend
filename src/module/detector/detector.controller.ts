import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DetectorService } from './detector.service';

@Controller('detector')
export class DetectorController {
  constructor(private readonly detectorService: DetectorService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.detectorService.detect(file);
  }
}
