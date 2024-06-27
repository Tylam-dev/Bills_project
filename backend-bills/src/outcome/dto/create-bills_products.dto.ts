import {  IsNotEmpty, IsNumber } from 'class-validator';

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
  @IsNumber()
  costUnit: number;
}
