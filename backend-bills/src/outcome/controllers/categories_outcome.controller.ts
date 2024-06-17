import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoriesOutcomeService } from '../services/categories_outcome.service';
import { CreateCategoriesOutcomeDto } from '../dto/create-categories_outcome.dto';
import { UpdateCategoriesOutcomeDto } from '../dto/update-categories_outcome.dto';

@Controller('categories-outcome')
export class CategoriesOutcomeController {
  constructor(
    private readonly categoriesOutcomeService: CategoriesOutcomeService,
  ) {}

  @Post()
  create(@Body() createCategoriesOutcomeDto: CreateCategoriesOutcomeDto) {
    return this.categoriesOutcomeService.create(createCategoriesOutcomeDto);
  }

  @Get()
  findAll() {
    return this.categoriesOutcomeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesOutcomeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoriesOutcomeDto: UpdateCategoriesOutcomeDto,
  ) {
    return this.categoriesOutcomeService.update(
      +id,
      updateCategoriesOutcomeDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesOutcomeService.remove(+id);
  }
}
