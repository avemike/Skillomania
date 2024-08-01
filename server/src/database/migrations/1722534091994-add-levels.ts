import { MigrationInterface, QueryRunner } from "typeorm";

export class AddLevels1722534091994 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "challenge" ADD "effort_level" integer NOT NULL;
            ALTER TABLE "challenge" ADD CONSTRAINT "effort_level_check" CHECK ("effort_level" >= 1 AND "effort_level" <= 5);
            ALTER TABLE "challenge_series" ADD "effort_level" integer NOT NULL;
            ALTER TABLE "challenge_series" ADD CONSTRAINT "effort_level_check" CHECK ("effort_level" >= 1 AND "effort_level" <= 5);
        `);

    await queryRunner.query(`
            ALTER TABLE "challenge" ADD "required_expertise" integer NOT NULL;
            ALTER TABLE "challenge" ADD CONSTRAINT "required_expertise_check" CHECK ("required_expertise" >= 0 AND "required_expertise" <= 4);
            ALTER TABLE "challenge_series" ADD "required_expertise" integer NOT NULL;
            ALTER TABLE "challenge_series" ADD CONSTRAINT "required_expertise_check" CHECK ("required_expertise" >= 0 AND "required_expertise" <= 4);
        `);

    await queryRunner.query(`
            ALTER TABLE "challenge" ADD "difficulty_explanation" text;
            ALTER TABLE "challenge_series" ADD "difficulty_explanation" text;
        `);

    await queryRunner.query(`
            ALTER TABLE "challenge" ADD "estimated_time" VARCHAR(20);
            ALTER TABLE "challenge_series" ADD "estimated_time" VARCHAR(20);
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "challenge" DROP COLUMN "effort_level";
            ALTER TABLE "challenge_series" DROP COLUMN "effort_level";
        `);

    await queryRunner.query(`
            ALTER TABLE "challenge" DROP COLUMN "required_expertise";
            ALTER TABLE "challenge_series" DROP COLUMN "required_expertise";
        `);

    await queryRunner.query(`
            ALTER TABLE "challenge" DROP COLUMN "difficulty_explanation";
            ALTER TABLE "challenge_series" DROP COLUMN "difficulty_explanation";
        `);

    await queryRunner.query(`
            ALTER TABLE "challenge" DROP COLUMN "estimated_time";
            ALTER TABLE "challenge_series" DROP COLUMN "estimated_time";
        `);
  }
}
