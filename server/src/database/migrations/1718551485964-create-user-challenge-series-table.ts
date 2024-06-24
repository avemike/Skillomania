import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserChallengeSeriesTable1718551485964
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE user_challenge_series (
                user_id INTEGER NOT NULL,
                challenge_series_id INTEGER NOT NULL,
                PRIMARY KEY (user_id, challenge_series_id),
                FOREIGN KEY (user_id) REFERENCES app_user(id) ON DELETE CASCADE,
                FOREIGN KEY (challenge_series_id) REFERENCES challenge_series(id) ON DELETE CASCADE
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE user_challenge_series;
        `);
  }
}
