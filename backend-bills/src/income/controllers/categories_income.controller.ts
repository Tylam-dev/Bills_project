import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CategoriesIncomeService } from '../services/categories_income.service';
import { CreateCategoriesIncomeDto } from '../dto/create-categories_income.dto';
import { UpdateCategoriesIncomeDto } from '../dto/update-categories_income.dto';

@Controller('categories-income')
export class CategoriesIncomeController {
  constructor(
    private readonly categoriesIncomeService: CategoriesIncomeService,
  ) {}

  @Post()
  create(@Body() createCategoriesIncomeDto: CreateCategoriesIncomeDto) {
    return this.categoriesIncomeService.create(createCategoriesIncomeDto);
  }

  @Get()
  findAll() {
    return this.categoriesIncomeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesIncomeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoriesIncomeDto: UpdateCategoriesIncomeDto,
  ) {
    return this.categoriesIncomeService.update(+id, updateCategoriesIncomeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesIncomeService.remove(+id);
  }
}
