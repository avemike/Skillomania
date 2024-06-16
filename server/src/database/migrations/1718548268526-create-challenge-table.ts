import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateChallengeTable1718548268526 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "challenges" (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            author_id INTEGER NOT NULL,
            version INTEGER NOT NULL,
            version_created_at TIMESTAMP WITH TIME ZONE NOT NULL,
            version_author_id INTEGER NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
            updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
            deleted_at TIMESTAMP WITH TIME ZONE
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE "challenges";
    `);
  }
}
