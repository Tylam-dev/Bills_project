import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriesOutcomeDto } from './create-categories_outcome.dto';

export class UpdateCategoriesOutcomeDto extends PartialType(
  CreateCategoriesOutcomeDto,
) {}
