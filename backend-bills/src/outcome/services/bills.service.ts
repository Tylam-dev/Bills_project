import { Injectable } from '@nestjs/common';
import { CreateBillDto } from '../dto/create-bill.dto';
import { UpdateBillDto } from '../dto/update-bill.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Bill } from '../entities/bill.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BillsService {
  constructor(
    @InjectRepository(Bill) private readonly billService: Repository<Bill>,
  ) {}
  create(createBillDto: CreateBillDto) {
    return this.billService.create(createBillDto);
  }

  findAll() {
    return this.billService.find();
  }

  findOne(id: number) {
    return this.billService.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateBillDto: UpdateBillDto) {
    const bill = await this.billService.findOne({
      where: {
        id: id,
      },
    });
    this.billService.merge(bill, updateBillDto);
    return this.billService.save(bill);
  }

  remove(id: number) {
    return this.billService.delete(id);
  }
}
