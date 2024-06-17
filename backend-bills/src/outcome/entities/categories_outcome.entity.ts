import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SubCategoriesOutcome } from './sub_categories_outcome.entity';

@Entity()
export class CategoriesOutcome {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @OneToMany(
    () => SubCategoriesOutcome,
    (subCategory) => subCategory.categoryId,
  )
  subcategoriesId: SubCategoriesOutcome[];
}
