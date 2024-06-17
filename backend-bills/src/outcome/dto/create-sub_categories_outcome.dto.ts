import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSubCategoriesOutcomeDto {
  @IsNotEmpty()
  @IsNumber()
  categoryId;

  @IsNotEmpty()
  @IsString()
  name: string;
}
