import { Test, TestingModule } from '@nestjs/testing';
import { SubCategoriesOutcomeService } from './sub_categories_outcome.service';

describe('SubCategoriesOutcomeService', () => {
  let service: SubCategoriesOutcomeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubCategoriesOutcomeService],
    }).compile();

    service = module.get<SubCategoriesOutcomeService>(SubCategoriesOutcomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
