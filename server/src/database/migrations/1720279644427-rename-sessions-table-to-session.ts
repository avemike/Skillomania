import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameSessionsTableToSession1720279644427
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE sessions
            RENAME TO session;
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE session
            RENAME TO sessions;
        `);
  }
}
