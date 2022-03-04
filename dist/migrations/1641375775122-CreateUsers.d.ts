import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CreateUsers1641375775122 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
