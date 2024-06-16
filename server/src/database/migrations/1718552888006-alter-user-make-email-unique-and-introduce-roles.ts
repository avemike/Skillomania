import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterUserMakeEmailUniqueAndIntroduceRoles1718552888006
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TYPE user_role AS ENUM ('ADMIN', 'STANDARD');
    `);

    await queryRunner.query(`
            ALTER TABLE app_user
            ADD COLUMN role user_role DEFAULT 'STANDARD';
        `);

    await queryRunner.query(`
            CREATE UNIQUE INDEX app_user_email_unique_idx
            ON app_user (email);
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP INDEX app_user_email_unique_idx;
        `);

    await queryRunner.query(`
            ALTER TABLE app_user
            DROP COLUMN role;
        `);
  }
}
