import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriesIncomeDto } from './create-categories_income.dto';

export class UpdateCategoriesIncomeDto extends PartialType(
  CreateCategoriesIncomeDto,
) {}
