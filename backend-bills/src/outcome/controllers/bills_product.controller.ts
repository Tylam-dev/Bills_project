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
  constructor(private readonly billsProductService: BillsProductsService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.billsProductService.findOne(+id);
  }

  @Post()
  create(@Body() createOutcomeDto: CreateBillsProductsDto) {
    return this.billsProductService.create(createOutcomeDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOutcomeDto: UpdateBillsProductsDto,
  ) {
    return this.billsProductService.update(+id, updateOutcomeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.billsProductService.remove(+id);
  }
}
