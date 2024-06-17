import { Module } from '@nestjs/common';
import { IncomeService } from './services/income.service';
import { IncomeController } from './controllers/income.controller';
import { CategoriesIncome } from './entities/categories_income.entity';
import { CategoriesIncomeService } from './services/categories_income.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Income } from './entities/income.entity';
import { CategoriesIncomeController } from './controllers/categories_income.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Income, CategoriesIncome])],
  controllers: [IncomeController, CategoriesIncomeController],
  providers: [IncomeService, CategoriesIncomeService],
})
export class IncomeModule {}
