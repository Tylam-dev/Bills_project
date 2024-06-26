import { Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { UpdateProductDto } from '../dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { Repository } from 'typeorm';
import { SubCategoriesOutcome } from '../entities/sub_categories_outcome.entity';
import { CategoriesOutcome } from '../entities/categories_outcome.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
    @InjectRepository(CategoriesOutcome)
    private readonly categoryOutRepo: Repository<CategoriesOutcome>,
    @InjectRepository(SubCategoriesOutcome)
    private readonly subCategoryRepo: Repository<SubCategoriesOutcome>,
  ) {}
  
  async create(createProductDto: CreateProductDto) {
    const subCategoryOut = await this.subCategoryRepo.findOne({
      where: {
        id: createProductDto.subCategoryId,
      },
    });
    if (!subCategoryOut) {
      throw new Error('Subcategory not found');
    }
    const product = this.productRepo.create({
      ...createProductDto,
      subCategoryId: subCategoryOut,
    });
    return this.productRepo.save(product);
  }

  findAll() {
    return this.productRepo.find();
  }

  findOne(id: number) {
    return this.productRepo.findOne({
      where: {
        id: id,
      },
    });
  }
  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productRepo.findOne({
      where: {
        id: id,
      },
    });
    if (updateProductDto.subCategoryId) {
      const subCategory = await this.subCategoryRepo.findOne({
        where: {
          id: updateProductDto.subCategoryId,
        },
      });
      if (!subCategory) {
        throw new Error('Subcategory Not Found');
      }
      this.productRepo.merge(product, subCategory);
    }else {
      const update: Omit<UpdateProductDto, "subCategoryId"> = {
        ...updateProductDto
      }
      this.productRepo.merge(product, update);
    }

    return this.productRepo.save(product);
  }

  remove(id: number) {
    return this.productRepo.delete(id);
  }
}
