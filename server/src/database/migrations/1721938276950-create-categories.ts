import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCategories1721938276950 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE category (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                parent_category_id INT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);

    await queryRunner.query(`
            ALTER TABLE category
            ADD CONSTRAINT fk_parent_category_id
            FOREIGN KEY (parent_category_id)
            REFERENCES category(id)
            ON DELETE SET NULL;
        `);

    await queryRunner.query(`
            CREATE INDEX idx_parent_category_id
            ON category(parent_category_id);
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP INDEX idx_parent_category_id;
        `);

    await queryRunner.query(`
            ALTER TABLE category
            DROP CONSTRAINT fk_parent_category_id;
        `);

    await queryRunner.query(`
            DROP TABLE category;
        `);
  }
}
