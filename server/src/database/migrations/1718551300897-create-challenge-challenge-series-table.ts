import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateChallengeChallengeSeriesTable1718551300897
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE challenge_challenge_series (
                challenge_id INTEGER NOT NULL,
                challenge_series_id INTEGER NOT NULL,
                PRIMARY KEY (challenge_id, challenge_series_id),
                FOREIGN KEY (challenge_id) REFERENCES challenge(id) ON DELETE CASCADE,
                FOREIGN KEY (challenge_series_id) REFERENCES challenge_series(id) ON DELETE CASCADE
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE challenge_challenge_series;
    `);
  }
}
