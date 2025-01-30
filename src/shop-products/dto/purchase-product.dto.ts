import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class PurchaseProductDto {

  @IsNumber()
  @IsNotEmpty()
  shopId: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  amount: string;
}
