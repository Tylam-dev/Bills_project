import { Module } from '@nestjs/common';
import { BillsController } from './controllers/bills.controller';
import { CategoriesOutcomeController } from './controllers/categories_outcome.controller';
import { SubCategoriesOutcome } from './entities/sub_categories_outcome.entity';
import { BillsService } from './services/bills.service';
import { BillsProductsService } from './services/bills-products.service';
import { SubCategoriesOutcomeService } from './services/sub_categories_outcome.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bill } from './entities/bill.entity';
import { BillsProduct } from './entities/bills-product.entity';
import { CategoriesOutcome } from './entities/categories_outcome.entity';
import { CategoriesOutcomeService } from './services/categories_outcome.service';
import { SubCategoriesOutcomeController } from './controllers/sub_categories_outcome.controller';
import { BillsProductController } from './controllers/bills_product.controller';
import { Product } from './entities/product.entity';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Bill,
      BillsProduct,
      CategoriesOutcome,
      SubCategoriesOutcome,
      Product,
    ]),
  ],
  controllers: [
    BillsController,
    BillsProductController,
    CategoriesOutcomeController,
    SubCategoriesOutcomeController,
    ProductsController,
    BillsProductController,
  ],
  providers: [
    BillsService,
    BillsProductsService,
    CategoriesOutcomeService,
    SubCategoriesOutcomeService,
    ProductsService,
    BillsProductsService,
  ],
})
export class OutcomeModule {}
