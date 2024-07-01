import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Bill } from './bill.entity';
import { Product } from './product.entity';

@Entity()
export class BillsProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  quantity: number;

  @Column({ type: 'float', nullable: false, name: 'cost_unit' })
  costUnit: number;

  @ManyToOne(() => Bill, (bill) => bill.productsId, {onDelete:"CASCADE"})
  @JoinColumn({ name: 'bills_id' })
  billId: Bill;

  @ManyToOne(() => Product, (product) => product.billsId)
  @JoinColumn({ name: 'products_id' })
  productId: Product;
}
