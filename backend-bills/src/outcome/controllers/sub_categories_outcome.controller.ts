import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SubCategoriesOutcomeService } from '../services/sub_categories_outcome.service';
import { CreateSubCategoriesOutcomeDto } from '../dto/create-sub_categories_outcome.dto';
import { UpdateSubCategoriesOutcomeDto } from '../dto/update-sub_categories_outcome.dto';

@Controller('sub-categories-outcome')
export class SubCategoriesOutcomeController {
  constructor(
    private readonly subCategoriesOutcomeService: SubCategoriesOutcomeService,
  ) {}

  @Post()
  create(@Body() createSubCategoriesOutcomeDto: CreateSubCategoriesOutcomeDto) {
    return this.subCategoriesOutcomeService.create(
      createSubCategoriesOutcomeDto,
    );
  }

  @Get()
  findAll() {
    return this.subCategoriesOutcomeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subCategoriesOutcomeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubCategoriesOutcomeDto: UpdateSubCategoriesOutcomeDto,
  ) {
    return this.subCategoriesOutcomeService.update(
      +id,
      updateSubCategoriesOutcomeDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subCategoriesOutcomeService.remove(+id);
  }
}
