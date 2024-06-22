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

@Entity()
export class Challenge implements IChallenge {
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

  @ManyToOne(() => User, (user) => user.challenges)
  @JoinColumn({
    name: "author_id",
  })
  // @JoinTable({ name: "user_challenge" })
  author: User;

  @ManyToMany(
    () => ChallengeSeries,
    (challengeSeries) => challengeSeries.challenges
  )
  @JoinTable({
    name: "challenge_challenge_series",
    joinColumn: { name: "challenge_id" },
    inverseJoinColumn: { name: "challenge_series_id" },
  })
  series: ChallengeSeries[];

  @VersionColumn()
  version: number;

  @Column("timestamp with time zone", {
    name: "version_created_at",
    default: () => "CURRENT_TIMESTAMP",
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
