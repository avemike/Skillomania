import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDefaultToVersionCreatedAt1718564631857
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE challenge_series
            ALTER COLUMN version_created_at SET DEFAULT CURRENT_TIMESTAMP;
        `);

    await queryRunner.query(`
            UPDATE challenge
            SET version_created_at = CURRENT_TIMESTAMP;
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE challenge_series
            ALTER COLUMN version_created_at DROP DEFAULT;
        `);

    await queryRunner.query(`
            UPDATE challenge
            SET version_created_at = null;
        `);
  }
}
