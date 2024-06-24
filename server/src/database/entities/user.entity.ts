import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { Challenge } from "./challenge.entity";
import { ChallengeSeries } from "./challengeSeries.entity";
import { IUser } from "../../models/IUser";

@Entity({
  name: "app_user",
})
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  email: string;

  @OneToMany(() => Challenge, (challenge) => challenge.author)
  challenges: Challenge[];

  @OneToMany(() => ChallengeSeries, (challengeSeries) => challengeSeries.author)
  challengeSeries: ChallengeSeries[];

  @OneToMany(
    () => Challenge,
    (challengeSeries) => challengeSeries.versionAuthor
  )
  modifiedSeries: ChallengeSeries[];

  @OneToMany(() => Challenge, (challenge) => challenge.versionAuthor)
  modifiedChallenges: Challenge[];

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
