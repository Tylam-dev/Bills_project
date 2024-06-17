import { Test, TestingModule } from '@nestjs/testing';
import { SubCategoriesOutcomeController } from './sub_categories_outcome.controller';
import { SubCategoriesOutcomeService } from '../services/sub_categories_outcome.service';

describe('SubCategoriesOutcomeController', () => {
  let controller: SubCategoriesOutcomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubCategoriesOutcomeController],
      providers: [SubCategoriesOutcomeService],
    }).compile();

    controller = module.get<SubCategoriesOutcomeController>(SubCategoriesOutcomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
