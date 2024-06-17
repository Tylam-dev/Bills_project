import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesOutcomeService } from './categories_outcome.service';

describe('CategoriesOutcomeService', () => {
  let service: CategoriesOutcomeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesOutcomeService],
    }).compile();

    service = module.get<CategoriesOutcomeService>(CategoriesOutcomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
