import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Challenge } from "./Challenge.model";
import { ChallengeSeries } from "./ChallengeSeries.model";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  username: string;

  @Column({
    length: 100,
  })
  email: string;

  @OneToMany(() => Challenge, (challenge) => challenge.author_id)
  challenges: Challenge[];

  @OneToMany(
    () => ChallengeSeries,
    (challengeSeries) => challengeSeries.author_id
  )
  challengeSeries: ChallengeSeries[];
}
