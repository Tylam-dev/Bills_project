import { Injectable } from '@nestjs/common';
import { CreateCategoriesOutcomeDto } from '../dto/create-categories_outcome.dto';
import { UpdateCategoriesOutcomeDto } from '../dto/update-categories_outcome.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesOutcome } from '../entities/categories_outcome.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesOutcomeService {
  constructor(
    @InjectRepository(CategoriesOutcome)
    private readonly categoryOutcomeRepo: Repository<CategoriesOutcome>,
  ) {}
  create(createCategoriesOutcomeDto: CreateCategoriesOutcomeDto) {
    const categoryOut = this.categoryOutcomeRepo.create(
      createCategoriesOutcomeDto,
    );
    return this.categoryOutcomeRepo.save(categoryOut);
  }

  findAll() {
    return this.categoryOutcomeRepo.find();
  }

  findOne(id: number) {
    return this.categoryOutcomeRepo.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(
    id: number,
    updateCategoriesOutcomeDto: UpdateCategoriesOutcomeDto,
  ) {
    const categoryOut = await this.categoryOutcomeRepo.findOne({
      where: {
        id: id,
      },
    });
    this.categoryOutcomeRepo.merge(categoryOut, updateCategoriesOutcomeDto);
    return this.categoryOutcomeRepo.save(categoryOut);
  }

  remove(id: number) {
    return this.categoryOutcomeRepo.delete(id);
  }
}
