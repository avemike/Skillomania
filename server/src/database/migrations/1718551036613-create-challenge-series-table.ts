import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateChallengeSeriesTable1718551036613
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE challenge_series (
                id SERIAL PRIMARY KEY,
                title VARCHAR(100) NOT NULL,
                description VARCHAR(500) NOT NULL,
                author_id INT NOT NULL,
                version INTEGER NOT NULL,
                version_created_at TIMESTAMP WITH TIME ZONE NOT NULL,
                version_author_id INTEGER NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                deleted_at TIMESTAMP WITH TIME ZONE
            );
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE challenge_series;
    `);
  }
}
