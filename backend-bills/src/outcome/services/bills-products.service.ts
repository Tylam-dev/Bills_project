import { Injectable } from '@nestjs/common';
import { CreateBillsProductsDto } from '../dto/create-bills_products.dto';
import { UpdateBillsProductsDto } from '../dto/update-bills_products.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BillsProduct } from '../entities/bills-product.entity';
import { Repository } from 'typeorm';
import { SubCategoriesOutcome } from '../entities/sub_categories_outcome.entity';
import { Bill } from '../entities/bill.entity';
import { Product } from '../entities/product.entity';

@Injectable()
export class BillsProductsService {
  constructor(
    @InjectRepository(BillsProduct)
    private readonly billsProductsRepo: Repository<BillsProduct>,
    @InjectRepository(Bill)
    private readonly billRepo: Repository<Bill>,
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async create(createBillsProductsDto: CreateBillsProductsDto) {
    const bill = await this.billRepo.findOne({
      where: {
        id: createBillsProductsDto.billId,
      },
    });
    const product = await this.productRepo.findOne({
      where: {
        id: createBillsProductsDto.productId,
      },
    });
    if (!bill) {
      throw new Error('Bill not found');
    }
    if (!product) {
      throw new Error('Product not found');
    }
    const billProduct = this.billsProductsRepo.create({
      ...createBillsProductsDto,
      productId: product,
      billId: bill
    })
    return this.billsProductsRepo.save(billProduct);
  }

  async update(id: number, updateBillsProductsDto: UpdateBillsProductsDto) {
    const billProduct = await this.billsProductsRepo.findOne({
      where:{
        id: id,
      },
    });
    if (!billProduct) {
      throw new Error("BillProduct not found")
    }
    if (updateBillsProductsDto.billId) {
      const bill = await this.billRepo.findOne({
        where:{
          id: updateBillsProductsDto.billId,
        },
      });
      this.billsProductsRepo.merge(billProduct, bill)
    }
    if (updateBillsProductsDto.productId) {
      const product = await this.productRepo.findOne({
        where:{
          id: updateBillsProductsDto.productId,
        },
      });
      this.billsProductsRepo.merge(billProduct, product)
    }
    return this.billsProductsRepo.save(billProduct);
  }

  remove(id: number) {
    return this.billsProductsRepo.delete(id);
  }
}
