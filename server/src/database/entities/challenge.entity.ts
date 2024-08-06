import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  VersionColumn,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from "typeorm";
import { ChallengeSeries } from "./challengeSeries.entity";
import { User } from "./user.entity";
import { IChallenge } from "../../models/IChallenge";
import { Category } from "./category.entity";

@Entity()
export class Challenge implements IChallenge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
    nullable: false,
  })
  title: string;

  @Column({
    length: 500,
  })
  description: string;

  @Column({
    type: "integer",
    name: "effort_level",
    nullable: false,
  })
  effortLevel: 1 | 2 | 3 | 4 | 5;

  @Column({
    type: "integer",
    name: "required_expertise",
    nullable: false,
  })
  requiredExpertise: 0 | 1 | 2 | 3;

  @Column({
    type: "text",
    name: "estimated_time",
    nullable: true,
  })
  estimatedTime: string;

  @Column({
    type: "text",
    name: "difficulty_explanation",
    nullable: true,
  })
  difficultyExplanation: string;

  @ManyToOne(() => User, (user) => user.challenges, { nullable: false })
  @JoinColumn({ name: "author_id" })
  author: User;

  @ManyToMany(() => User, (user) => user.challenges)
  @JoinTable({
    name: "rel_user_challenge",
    joinColumn: { name: "challenge_id" },
    inverseJoinColumn: { name: "user_id" },
  })
  owners: User[];

  @ManyToMany(
    () => ChallengeSeries,
    (challengeSeries) => challengeSeries.challenges
  )
  @JoinTable({
    name: "rel_challenge_challenge_series",
    joinColumn: { name: "challenge_id" },
    inverseJoinColumn: { name: "challenge_series_id" },
  })
  series: ChallengeSeries[];

  @ManyToOne(() => Category, (category) => category.challenges, {
    nullable: false,
  })
  @JoinColumn({ name: "category_id" })
  category: Category;

  @VersionColumn()
  version: number;

  @Column("timestamp with time zone", {
    name: "version_created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  versionCreatedAt: Date;

  @ManyToOne(() => User, (user) => user.modifiedSeries, { nullable: false })
  @JoinColumn({ name: "version_author_id" })
  versionAuthor: User;

  @CreateDateColumn({
    name: "created_at",
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: "updated_at",
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: "deleted_at",
  })
  deletedAt: Date;
}
