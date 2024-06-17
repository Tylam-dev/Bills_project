import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoriesIncomeDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
