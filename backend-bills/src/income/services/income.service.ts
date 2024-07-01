import { Injectable } from '@nestjs/common';
import { CreateIncomeDto } from '../dto/create-income.dto';
import { UpdateIncomeDto } from '../dto/update-income.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Income } from '../entities/income.entity';
import { Between, Repository } from 'typeorm';
import { CategoriesIncome } from '../entities/categories_income.entity';
import { FilterIncomeDto } from '../dto/filter-income.dto';

@Injectable()
export class IncomeService {
  constructor(
    @InjectRepository(Income) private readonly incomeRepo: Repository<Income>,
    @InjectRepository(CategoriesIncome)
    private readonly cartegoryIncomeRepo: Repository<CategoriesIncome>,
  ) {}
  async create(createIncomeDto: CreateIncomeDto) {
    const { categoryId } = createIncomeDto;
    const category = await this.cartegoryIncomeRepo.findOne({
      where: {
        id: categoryId,
      },
    });
    if (!category) {
      throw new Error('Category not Found');
    }
    const income = this.incomeRepo.create({
      ...createIncomeDto,
      categoryId: category,
    });
    return this.incomeRepo.save(income);
  }

  findAll(params?: FilterIncomeDto) {
    const {from, to} = params
    if (from && to) {
      return this.incomeRepo.find({
        where: {
          date: Between(from, to),
        },
      });
    }
    return this.incomeRepo.find();
  }

  findOne(id: number) {
    const income = this.incomeRepo.findOne({
      where: {
        id: id,
      },
    });
    return income;
  }

  async update(id: number, updateIncomeDto: UpdateIncomeDto) {
    const income = await this.incomeRepo.findOne({
      where: {
        id: id,
      },
    });
    if (updateIncomeDto.categoryId) {
      const categories = await this.incomeRepo.findOne({
        where: {
          id: updateIncomeDto.categoryId,
        },
      });
      if (!categories) {
        throw new Error('Category not found');
      } else {
        this.incomeRepo.merge(income, {
          ...updateIncomeDto,
          categoryId: categories,
        });
      }
    } else {
      const update: Omit<UpdateIncomeDto, 'categoryId'> = {
        ...updateIncomeDto,
      };
      this.incomeRepo.merge(income, update);
    }
    return this.incomeRepo.save(income);
  }

  remove(id: number) {
    return this.incomeRepo.delete(id);
  }
}
