import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Challenge } from "./Challenge.model";

@Entity()
export class ChallengeSeries {
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

  @ManyToMany((_challenge) => Challenge, (challenge) => challenge.series)
  @JoinTable()
  challenges: Challenge[];
}
