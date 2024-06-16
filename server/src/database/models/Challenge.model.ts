import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { ChallengeSeries } from "./ChallengeSeries.model";

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

  @ManyToMany(
    (_challengeSeries) => ChallengeSeries,
    (challengeSeries) => challengeSeries.challenges
  )
  @JoinTable()
  series: ChallengeSeries[];
}
