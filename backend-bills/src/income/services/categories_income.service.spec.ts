import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesIncomeService } from './services/categories_income.service';

describe('CategoriesIncomeService', () => {
  let service: CategoriesIncomeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesIncomeService],
    }).compile();

    service = module.get<CategoriesIncomeService>(CategoriesIncomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
