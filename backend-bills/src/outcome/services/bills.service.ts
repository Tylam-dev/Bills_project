import { Injectable } from '@nestjs/common';
import { CreateBillDto } from '../dto/create-bill.dto';
import { UpdateBillDto } from '../dto/update-bill.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Bill } from '../entities/bill.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BillsService {
  constructor(
    @InjectRepository(Bill) private readonly billRepo: Repository<Bill>,
  ) {}
  create(createBillDto: CreateBillDto) {
    return this.billRepo.save(createBillDto);
  }

  async findAll() {
    return await this.billRepo.find();
  }

  async findOne(id: number) {
    return await this.billRepo.findOne({
      where: {
        id: id,
      },
      relations:['productsId.productId', 'productsId']
    });
  }

  async update(id: number, updateBillDto: UpdateBillDto) {
    const bill = await this.billRepo.findOne({
      where: {
        id: id,
      },
    });
    this.billRepo.merge(bill, updateBillDto);
    return this.billRepo.save(bill);
  }

  remove(id: number) {
    return this.billRepo.delete(id);
  }
}
