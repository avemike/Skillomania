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
} from "typeorm";
import { ChallengeSeries } from "./ChallengeSeries.model";
import { User } from "./User.model";

@Entity()
export class Challenge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  title: string;

  @Column({
    length: 500,
  })
  description: string;

  @Column()
  author_id: number;

  @ManyToOne(() => User)
  author: User;

  @ManyToMany(
    (_challengeSeries) => ChallengeSeries,
    (challengeSeries) => challengeSeries.challenges
  )
  @JoinTable()
  series: ChallengeSeries[];

  @VersionColumn()
  version: number;

  @Column("timestamp with time zone")
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
