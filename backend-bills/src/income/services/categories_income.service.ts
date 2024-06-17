import { Injectable } from '@nestjs/common';
import { CreateCategoriesIncomeDto } from '../dto/create-categories_income.dto';
import { UpdateCategoriesIncomeDto } from '../dto/update-categories_income.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesIncome } from '../entities/categories_income.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesIncomeService {
  constructor(
    @InjectRepository(CategoriesIncome)
    private readonly categoryIncomeRepo: Repository<CategoriesIncome>,
  ) {}
  create(createCategoriesIncomeDto: CreateCategoriesIncomeDto) {
    const newCategory = this.categoryIncomeRepo.create(
      createCategoriesIncomeDto,
    );
    return this.categoryIncomeRepo.save(newCategory);
  }

  findAll() {
    return this.categoryIncomeRepo.find();
  }

  findOne(id: number) {
    return this.categoryIncomeRepo.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(
    id: number,
    updateCategoriesIncomeDto: UpdateCategoriesIncomeDto,
  ) {
    const categoryIncome = await this.categoryIncomeRepo.findOne({
      where: {
        id: id,
      },
    });
    this.categoryIncomeRepo.merge(categoryIncome, updateCategoriesIncomeDto);
    return this.categoryIncomeRepo.save(categoryIncome);
  }

  remove(id: number) {
    return this.categoryIncomeRepo.delete(id);
  }
}
