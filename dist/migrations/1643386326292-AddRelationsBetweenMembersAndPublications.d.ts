import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddRelationsBetweenMembersAndPublications1643386326292 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
