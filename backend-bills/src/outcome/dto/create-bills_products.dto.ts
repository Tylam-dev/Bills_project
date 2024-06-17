import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBillsProductsDto {
  @IsNotEmpty()
  @IsNumber()
  categoriesId: number;

  @IsNotEmpty()
  @IsNumber()
  subCategoriesId: number;

  @IsNotEmpty()
  @IsString()
  name: string;
}
