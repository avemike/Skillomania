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

@Entity()
export class ChallengeSeries implements IChallengeSeries {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  title: string;

  @Column("text")
  description: string;

  @ManyToOne(() => User, (user) => user.challengeSeries)
  @JoinColumn({ name: "author_id" })
  author: User;

  @ManyToMany(() => Challenge, (challenge) => challenge.series)
  @JoinTable({
    name: "rel_challenge_challenge_series",
    joinColumn: { name: "challenge_series_id" },
    inverseJoinColumn: { name: "challenge_id" },
  })
  challenges: Challenge[];

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
