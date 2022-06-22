import appConfig from '@/common/config/app.config';
import { PrismaService } from '@/common/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DetectorController } from './detector.controller';
import { DetectorService } from './detector.service';

@Module({
  imports: [ConfigModule],
  controllers: [DetectorController],
  providers: [DetectorService, PrismaService],
})
export class DetectorModule {}
