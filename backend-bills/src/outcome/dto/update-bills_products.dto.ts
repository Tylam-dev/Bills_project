import { PartialType } from '@nestjs/mapped-types';
import { CreateBillsProductsDto } from './create-bills_products.dto';

export class UpdateBillsProductsDto extends PartialType(
  CreateBillsProductsDto,
) {}
