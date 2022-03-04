import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddedPublishedToPublications1643701415563 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
