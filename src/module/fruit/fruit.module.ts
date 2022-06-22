import { PrismaService } from '@/common/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { FruitsController } from './fruit.controller';
import { FruitsService } from './fruit.service';

@Module({
  controllers: [FruitsController],
  providers: [FruitsService, PrismaService],
})
export class FruitModule {}
