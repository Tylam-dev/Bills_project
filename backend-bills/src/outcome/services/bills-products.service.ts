import { Injectable } from '@nestjs/common';
import { CreateBillsProductsDto } from '../dto/create-bills_products.dto';
import { UpdateBillsProductsDto } from '../dto/update-bills_products.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BillsProduct } from '../entities/bills-product.entity';
import { Repository } from 'typeorm';
import { CategoriesOutcome } from '../entities/categories_outcome.entity';
import { SubCategoriesOutcome } from '../entities/sub_categories_outcome.entity';

@Injectable()
export class BillsProductsService {
  constructor(
    @InjectRepository(BillsProduct)
    private readonly billsProductsRepo: Repository<BillsProduct>,
    @InjectRepository(CategoriesOutcome)
    private readonly categoryOutRepo: Repository<CategoriesOutcome>,
    @InjectRepository(SubCategoriesOutcome)
    private readonly subCategoryRepo: Repository<SubCategoriesOutcome>,
  ) {}

  async create(createBillsProductsDto: CreateBillsProductsDto) {
    const categoryOut = await this.categoryOutRepo.findOne({
      where: {
        id: createBillsProductsDto.categoriesId,
      },
    });
    const subCategoryOut = await this.subCategoryRepo.findOne({
      where: {
        id: createBillsProductsDto.subCategoriesId,
      },
    });
    if (!categoryOut) {
      throw new Error('Category not found');
    }
    if (!subCategoryOut) {
      throw new Error('Subcategory not found');
    }
    return ;
  }

  findAll() {
    return `This action returns all billsProducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} billsProduct`;
  }

  update(id: number, updateBillsProductsDto: UpdateBillsProductsDto) {
    return `This action updates a #${id} billsProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} billsProduct`;
  }
}
