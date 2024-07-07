import { MigrationInterface, QueryRunner } from "typeorm";

export class AddFirstnameLastnameAuthSourceToUsers1720260899104
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE app_user
            ADD COLUMN first_name VARCHAR(100),
            ADD COLUMN last_name VARCHAR(100),
            ADD COLUMN auth_source VARCHAR(100);
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE app_user
            DROP COLUMN first_name,
            DROP COLUMN last_name,
            DROP COLUMN auth_source;
        `);
  }
}
