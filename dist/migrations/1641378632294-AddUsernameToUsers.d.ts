import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class AddUsernameToUsers1641378632294 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
