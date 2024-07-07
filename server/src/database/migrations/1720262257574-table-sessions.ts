import { MigrationInterface, QueryRunner } from "typeorm";

export class TableSessions1720262257574 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE sessions (
            id SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES app_user(id),
            token VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW(),
            expires_at TIMESTAMP
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE sessions;
    `);
  }
}
