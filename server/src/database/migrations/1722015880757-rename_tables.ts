import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameTables1722015880757 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE challenge_challenge_series RENAME TO rel_challenge_challenge_series`
    );

    await queryRunner.query(
      `ALTER TABLE user_challenge_series RENAME TO rel_user_challenge_series`
    );

    await queryRunner.query(
      `ALTER TABLE user_challenge RENAME TO rel_user_challenge`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE rel_challenge_challenge_series RENAME TO challenge_challenge_series`
    );

    await queryRunner.query(
      `ALTER TABLE rel_user_challenge_series RENAME TO user_challenge_series`
    );

    await queryRunner.query(
      `ALTER TABLE rel_user_challenge RENAME TO user_challenge`
    );
  }
}
