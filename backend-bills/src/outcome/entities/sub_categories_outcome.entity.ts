import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoriesOutcome } from './categories_outcome.entity';
import { Product } from './product.entity';

@Entity()
export class SubCategoriesOutcome {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @ManyToOne(() => CategoriesOutcome, (category) => category.subcategoriesId)
  @JoinColumn({ name: 'categories_out_id' })
  categoryId: CategoriesOutcome;

  @OneToMany(() => Product, (product) => product.subCategoryId)
  productsId: Product[];
}
