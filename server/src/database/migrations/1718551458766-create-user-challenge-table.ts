import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserChallengeTable1718551458766
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE user_challenge (
                user_id INTEGER NOT NULL,
                challenge_id INTEGER NOT NULL,
                PRIMARY KEY (user_id, challenge_id),
                FOREIGN KEY (user_id) REFERENCES app_user(id) ON DELETE CASCADE,
                FOREIGN KEY (challenge_id) REFERENCES challenge(id) ON DELETE CASCADE
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE user_challenge;
    `);
  }
}
