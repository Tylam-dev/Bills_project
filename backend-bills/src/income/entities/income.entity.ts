import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoriesIncome } from './categories_income.entity';

@Entity()
export class Income {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  description: string;

  @Column({ type: 'bigint', nullable: false })
  mount: number;

  @Column({ type: 'date', nullable: false })
  date: string;

  @ManyToOne(() => CategoriesIncome)
  @JoinColumn({ name: 'categories_inc_id' })
  categoryId: CategoriesIncome;
}
