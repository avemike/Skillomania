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
} from "typeorm";
import { Challenge } from "./Challenge.model";
import { User } from "./User.model";

@Entity()
export class ChallengeSeries {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  title: string;

  @Column("text")
  description: string;

  @Column()
  author_id: number;

  @ManyToOne((_type) => User, (user) => user.challengeSeries)
  @JoinTable({ name: "user_challenge_series" })
  author: User;

  @ManyToMany((_challenge) => Challenge, (challenge) => challenge.series)
  @JoinTable({ name: "challenge_challenge_series" })
  challenges: Challenge[];

  @VersionColumn()
  version: number;

  @Column("timestamp with time zone", {
    default: () => "CURRENT_TIMESTAMP",
  })
  version_created_at: Date;

  @Column()
  version_author_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
