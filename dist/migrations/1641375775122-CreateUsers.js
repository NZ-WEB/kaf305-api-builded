"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsers1641375775122 = void 0;
class CreateUsers1641375775122 {
    constructor() {
        this.name = 'CreateUsers1641375775122';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "bio" character varying NOT NULL DEFAULT '', "image" character varying NOT NULL DEFAULT '', "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
exports.CreateUsers1641375775122 = CreateUsers1641375775122;
//# sourceMappingURL=1641375775122-CreateUsers.js.map