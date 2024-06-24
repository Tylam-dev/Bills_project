import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Income } from './income.entity';

@Entity()
export class CategoriesIncome {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @OneToMany(() => Income, (income) => income.categoryId, {nullable: true})
  @JoinColumn({ name: 'income_id' })
  incomeId: Income[];
}
