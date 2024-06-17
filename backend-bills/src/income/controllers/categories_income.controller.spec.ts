import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesIncomeController } from './categories_income.controller';
import { CategoriesIncomeService } from '../services/categories_income.service';

describe('CategoriesIncomeController', () => {
  let controller: CategoriesIncomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesIncomeController],
      providers: [CategoriesIncomeService],
    }).compile();

    controller = module.get<CategoriesIncomeController>(
      CategoriesIncomeController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
