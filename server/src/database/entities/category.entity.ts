import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ICategory } from "../../models/ICategory";
import { Challenge } from "./challenge.entity";
import { ChallengeSeries } from "./challengeSeries.entity";

@Entity()
export class Category implements ICategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
    nullable: false,
  })
  name: string;

  @ManyToOne(() => Category, (category) => category.childrenCategories)
  @JoinColumn({ name: "parent_category_id" })
  parentCategory: Category | null;

  @OneToMany(() => Category, (category) => category.parentCategory)
  childrenCategories: Category[];

  @OneToMany(() => Challenge, (challenge) => challenge.category)
  challenges: Challenge[];

  @OneToMany(
    () => ChallengeSeries,
    (challengeSeries) => challengeSeries.category
  )
  challengeSeries: ChallengeSeries[];

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
