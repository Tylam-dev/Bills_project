import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesOutcomeController } from './categories_outcome.controller';
import { CategoriesOutcomeService } from '../services/categories_outcome.service';

describe('CategoriesOutcomeController', () => {
  let controller: CategoriesOutcomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesOutcomeController],
      providers: [CategoriesOutcomeService],
    }).compile();

    controller = module.get<CategoriesOutcomeController>(
      CategoriesOutcomeController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
