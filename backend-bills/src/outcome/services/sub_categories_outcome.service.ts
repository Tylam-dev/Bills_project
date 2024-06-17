import { Injectable } from '@nestjs/common';
import { CreateSubCategoriesOutcomeDto } from '../dto/create-sub_categories_outcome.dto';
import { UpdateSubCategoriesOutcomeDto } from '../dto/update-sub_categories_outcome.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubCategoriesOutcome } from '../entities/sub_categories_outcome.entity';
import { CategoriesOutcome } from '../entities/categories_outcome.entity';

@Injectable()
export class SubCategoriesOutcomeService {
  constructor(
    @InjectRepository(CategoriesOutcome)
    private readonly categoriesOutRepository: Repository<CategoriesOutcome>,
    @InjectRepository(SubCategoriesOutcome)
    private readonly subCategoryOutRepo: Repository<SubCategoriesOutcome>,
  ) {}
  async create(createSubCategoriesOutcomeDto: CreateSubCategoriesOutcomeDto) {
    const { categoryId } = createSubCategoriesOutcomeDto;
    const categoryOut = await this.categoriesOutRepository.findOne({
      where: {
        id: categoryId,
      },
    });
    if (!categoryId) {
      throw new Error('Category Not Found');
    }
    const subCategoryOut = this.subCategoryOutRepo.create({
      ...createSubCategoriesOutcomeDto,
      categoryId: categoryOut,
    });
    return this.subCategoryOutRepo.save(subCategoryOut);
  }

  findAll() {
    return this.subCategoryOutRepo.find();
  }

  findOne(id: number) {
    const subCategoryOut = this.subCategoryOutRepo.findOne({
      where: {
        id: id,
      },
    });
    return subCategoryOut;
  }

  async update(
    id: number,
    updateSubCategoriesOutcomeDto: UpdateSubCategoriesOutcomeDto,
  ) {
    const subCategory = await this.subCategoryOutRepo.findOne({
      where: {
        id: id,
      },
    });

    if (updateSubCategoriesOutcomeDto.categoryId) {
      const categoryOutcome = await this.categoriesOutRepository.findOne({
        where: {
          id: updateSubCategoriesOutcomeDto.categoryId,
        },
      });

      if (!categoryOutcome) {
        throw new Error('Category not found');
      } else {
        this.subCategoryOutRepo.merge(subCategory, {
          ...updateSubCategoriesOutcomeDto,
          categoryId: categoryOutcome,
        });
      }
    } else {
      const update: Omit<UpdateSubCategoriesOutcomeDto, 'categoryId'> = {
        ...updateSubCategoriesOutcomeDto,
      };
      this.subCategoryOutRepo.merge(subCategory, update);
    }
    return this.subCategoryOutRepo.save(subCategory);
  }

  remove(id: number) {
    return this.subCategoryOutRepo.delete(id);
  }
}
