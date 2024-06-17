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
  quatity: number;

  @Column({ type: 'float', nullable: false, name: 'cost_unit' })
  costUnit: Float32Array;

  @ManyToOne(() => Bill, (bill) => bill.productsId)
  @JoinColumn({ name: 'bills_id' })
  billId: Bill;

  @ManyToOne(() => Product, (product) => product.billsId)
  @JoinColumn({ name: 'products_id' })
  productId: Product;
}
