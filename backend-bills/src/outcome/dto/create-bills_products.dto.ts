import {  IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBillsProductsDto {
  @IsNotEmpty()
  @IsNumber()
  quatity: number;

  @IsNotEmpty()
  @IsNumber()
  billId: number;

  @IsNotEmpty()
  @IsNumber()
  productId: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  costUnit: number;
}
