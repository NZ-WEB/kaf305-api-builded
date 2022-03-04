"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTags1641372397900 = void 0;
class CreateTags1641372397900 {
    constructor() {
        this.name = 'CreateTags1641372397900';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "tags" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "tags"`);
    }
}
exports.CreateTags1641372397900 = CreateTags1641372397900;
//# sourceMappingURL=1641372397900-CreateTags.js.map