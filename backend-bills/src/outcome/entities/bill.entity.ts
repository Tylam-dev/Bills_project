import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BillsProduct } from './bills-product.entity';
import { Exclude, Expose } from 'class-transformer';

@Entity()
export class Bill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 255 })
  description: string;

  @Column({ type: 'date', nullable: false })
  date: string;

  @OneToMany(() => BillsProduct, (billProduct) => billProduct.billId)
  productsId: BillsProduct[];

  @Expose()
  get total() {
    if (this.productsId) {
        return this.productsId.reduce((total, item) => {
        const totalItem = item.costUnit * item.quantity
        return total + totalItem;
      }, 0)
    }
    return ;
  }
}
