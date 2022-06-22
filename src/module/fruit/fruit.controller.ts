import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateFruitDto } from './dto/create_fruit.dto';
import { FruitsService } from './fruit.service';

@Controller('fruits')
export class FruitsController {
  constructor(private readonly fruitsService: FruitsService) {}

  @Get()
  findAll() {
    return this.fruitsService.getFruits();
  }

  @Get(':slug')
  findBySlug(@Param('slug') slug: string) {
    return this.fruitsService.getFruitBySlug(slug);
  }

  @Post()
  createFruit(@Body() createFruitDto: CreateFruitDto) {
    return this.fruitsService.addFruit(createFruitDto);
  }

  @Delete(':slug')
  deleteFruit(@Param('slug') slug: string) {
    return this.fruitsService.deleteFruitBySlug(slug);
  }
}
