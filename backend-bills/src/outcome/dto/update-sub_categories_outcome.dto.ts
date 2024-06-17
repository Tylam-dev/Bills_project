import { PartialType } from '@nestjs/mapped-types';
import { CreateSubCategoriesOutcomeDto } from './create-sub_categories_outcome.dto';

export class UpdateSubCategoriesOutcomeDto extends PartialType(CreateSubCategoriesOutcomeDto) {}
