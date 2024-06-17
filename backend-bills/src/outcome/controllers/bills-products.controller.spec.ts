import { Test, TestingModule } from '@nestjs/testing';
import { BillsProductsController } from './bills-products.controller';
import { BillsProductsService } from '../services/bills-products.service';

describe('BillsProductsController', () => {
  let controller: BillsProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillsProductsController],
      providers: [BillsProductsService],
    }).compile();

    controller = module.get<BillsProductsController>(BillsProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
