import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateFruitDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  scientificName: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  images: string[];
}
