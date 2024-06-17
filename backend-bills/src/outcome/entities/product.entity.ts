import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SubCategoriesOutcome } from './sub_categories_outcome.entity';
import { BillsProduct } from './bills-product.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @ManyToOne(
    () => SubCategoriesOutcome,
    (subcategory) => subcategory.productsId,
  )
  @JoinColumn({ name: 'subcategories_outcome_id' })
  subCategoryId: SubCategoriesOutcome;

  @OneToMany(() => BillsProduct, (billsProduct) => billsProduct.productId)
  billsId: BillsProduct[];
}
