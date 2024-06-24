import { MigrationInterface, QueryRunner } from "typeorm";

export class FixDefaultVersionCreatedAt1718567657829
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE challenge
            ALTER COLUMN version_created_at SET DEFAULT CURRENT_TIMESTAMP;
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE challenge
            ALTER COLUMN version_created_at DROP DEFAULT;
        `);
  }
}
