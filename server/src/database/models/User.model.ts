import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { Challenge } from "./Challenge.model";
import { ChallengeSeries } from "./ChallengeSeries.model";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  email: string;

  @OneToMany(() => Challenge, (challenge) => challenge.author_id)
  @JoinTable({ name: "user_challenge" })
  challenges: Challenge[];

  @OneToMany(
    () => ChallengeSeries,
    (challengeSeries) => challengeSeries.author_id
  )
  @JoinTable({ name: "user_challenge_series" })
  challengeSeries: ChallengeSeries[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
