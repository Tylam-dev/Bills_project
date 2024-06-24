import { Injectable } from '@nestjs/common';
import { CreateCategoriesIncomeDto } from '../dto/create-categories_income.dto';
import { UpdateCategoriesIncomeDto } from '../dto/update-categories_income.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesIncome } from '../entities/categories_income.entity';
import { Between, Repository } from 'typeorm';
import { FilterCategoriesIncomeDto } from '../dto/filter-categories_income.dto';

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

  findAll(filters?: FilterCategoriesIncomeDto) {
    const { from, to } = filters
    if (from && to) {
      return this.categoryIncomeRepo.find({
        where:{
          incomeId: {
            date: Between(from, to)
          }
        },
        relations: ['incomeId']
      });
    }
    return this.categoryIncomeRepo.find({
      relations: ['incomeId']
    });
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
