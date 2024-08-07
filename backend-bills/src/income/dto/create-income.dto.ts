import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateIncomeDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  mount: number;

  @IsNotEmpty()
  @IsDate()
  date: string;

  @IsNotEmpty()
  @IsNumber()
  categoryId: number;
}
