import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoriesOutcomeDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
