import { IsDecimal, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  id: number;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsDecimal()
  @IsNotEmpty()
  price: number;
  @IsNumber()
  inventory: number;
}
