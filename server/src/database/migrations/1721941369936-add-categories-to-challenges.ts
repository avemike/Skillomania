import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCategoriesToChallenges1721941369936
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    // there's a category table
    await queryRunner.query(
      `ALTER TABLE "challenge" ADD COLUMN "category_id" INTEGER`
    );

    await queryRunner.query(
      `ALTER TABLE "challenge" ADD CONSTRAINT "FK_category_id" FOREIGN KEY ("category_id") REFERENCES "category"("id")`
    );

    await queryRunner.query(
      `ALTER TABLE "challenge_series" ADD COLUMN "category_id" INTEGER`
    );

    await queryRunner.query(
      `ALTER TABLE "challenge_series" ADD CONSTRAINT "FK_category_id" FOREIGN KEY ("category_id") REFERENCES "category"("id")`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "challenge" DROP CONSTRAINT "FK_category_id"`
    );

    await queryRunner.query(
      `ALTER TABLE "challenge" DROP COLUMN "category_id"`
    );

    await queryRunner.query(
      `ALTER TABLE "challenge_series" DROP CONSTRAINT "FK_category_id"`
    );

    await queryRunner.query(
      `ALTER TABLE "challenge_series" DROP COLUMN "category_id"`
    );
  }
}
