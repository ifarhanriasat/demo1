import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class StoreProductDto {

  @IsNotEmpty()
  shopId: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  price: number;
}
