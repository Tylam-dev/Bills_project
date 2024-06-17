import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateBillsProductsDto } from '../dto/create-bills_products.dto';
import { UpdateBillsProductsDto } from '../dto/update-bills_products.dto';
import { BillsProductsService } from '../services/bills-products.service';

@Controller('bills-products')
export class BillsProductController {
  constructor(private readonly categoriesBillsService: BillsProductsService) {}

  @Post()
  create(@Body() createOutcomeDto: CreateBillsProductsDto) {
    return this.categoriesBillsService.create(createOutcomeDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOutcomeDto: UpdateBillsProductsDto,
  ) {
    return this.categoriesBillsService.update(+id, updateOutcomeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesBillsService.remove(+id);
  }
}
