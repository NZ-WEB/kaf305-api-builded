import {MigrationInterface, QueryRunner} from "typeorm";

export class AddNewsEntity1646839016549 implements MigrationInterface {
    name = 'AddNewsEntity1646839016549'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tags" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "tags" DROP COLUMN "slug"`);
        await queryRunner.query(`ALTER TABLE "tags" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "tags" DROP COLUMN "subtitle"`);
        await queryRunner.query(`ALTER TABLE "tags" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "tags" DROP COLUMN "icon"`);
        await queryRunner.query(`ALTER TABLE "tags" ADD "slug" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tags" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tags" ADD "subtitle" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "tags" ADD "description" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "tags" ADD "icon" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "tags" ADD "name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tags" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "tags" DROP COLUMN "icon"`);
        await queryRunner.query(`ALTER TABLE "tags" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "tags" DROP COLUMN "subtitle"`);
        await queryRunner.query(`ALTER TABLE "tags" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "tags" DROP COLUMN "slug"`);
        await queryRunner.query(`ALTER TABLE "tags" ADD "icon" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "tags" ADD "description" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "tags" ADD "subtitle" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "tags" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tags" ADD "slug" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tags" ADD "name" character varying NOT NULL`);
    }

}
