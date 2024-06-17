import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CategoriesIncome {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;
}
