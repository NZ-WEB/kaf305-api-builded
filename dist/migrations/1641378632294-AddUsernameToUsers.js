"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUsernameToUsers1641378632294 = void 0;
class AddUsernameToUsers1641378632294 {
    constructor() {
        this.name = 'AddUsernameToUsers1641378632294';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "username" character varying NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "username"`);
    }
}
exports.AddUsernameToUsers1641378632294 = AddUsernameToUsers1641378632294;
//# sourceMappingURL=1641378632294-AddUsernameToUsers.js.map