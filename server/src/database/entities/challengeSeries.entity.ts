import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  DeleteDateColumn,
  UpdateDateColumn,
  VersionColumn,
  CreateDateColumn,
  JoinColumn,
} from "typeorm";
import { Challenge } from "./challenge.entity";
import { User } from "./user.entity";
import { IChallengeSeries } from "../../models/IChallengeSeries";
import { Category } from "./category.entity";

@Entity()
export class ChallengeSeries implements IChallengeSeries {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
    nullable: false,
  })
  title: string;

  @Column("text")
  description: string;

  @Column({
    type: "integer",
    name: "effort_level",
    nullable: false,
  })
  effortLevel: 1 | 2 | 3 | 4 | 5;

  @Column({
    type: "text",
    name: "estimated_time",
    nullable: true,
  })
  estimatedTime: string;

  @Column({
    type: "integer",
    name: "required_expertise",
    nullable: false,
  })
  requiredExpertise: 0 | 1 | 2 | 3;

  @Column({
    type: "text",
    name: "difficulty_explanation",
    nullable: true,
  })
  difficultyExplanation: string;

  @ManyToOne(() => User, (user) => user.challengeSeries)
  @JoinColumn({ name: "author_id" })
  author: User;

  @ManyToMany(() => User, (user) => user.challengeSeries)
  @JoinTable({
    name: "rel_user_challenge_series",
    joinColumn: { name: "challenge_series_id" },
    inverseJoinColumn: { name: "user_id" },
  })
  owners: User[];

  @ManyToMany(() => Challenge, (challenge) => challenge.series)
  @JoinTable({
    name: "rel_challenge_challenge_series",
    joinColumn: { name: "challenge_series_id" },
    inverseJoinColumn: { name: "challenge_id" },
  })
  challenges: Challenge[];

  @ManyToOne(() => Category, (category) => category.challengeSeries)
  @JoinColumn({ name: "category_id" })
  category: Category;

  @VersionColumn()
  version: number;

  @Column("timestamp with time zone", {
    default: () => "CURRENT_TIMESTAMP",
    name: "version_created_at",
  })
  versionCreatedAt: Date;

  @ManyToOne(() => User, (user) => user.modifiedSeries)
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
