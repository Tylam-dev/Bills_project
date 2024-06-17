import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BillsProduct } from './bills-product.entity';

@Entity()
export class Bill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 255 })
  description: string;

  @Column({ type: 'date', nullable: false })
  date: Date;

  @OneToMany(() => BillsProduct, (billProduct) => billProduct.billId)
  productsId: BillsProduct[];
}
