"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMembers1641564992435 = void 0;
class CreateMembers1641564992435 {
    constructor() {
        this.name = 'CreateMembers1641564992435';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "members_entity" ("id" SERIAL NOT NULL, "slug" character varying NOT NULL, "fullName" character varying NOT NULL DEFAULT '', "post" character varying NOT NULL DEFAULT '', "disciplines" character varying NOT NULL DEFAULT '', "education" character varying NOT NULL DEFAULT '', "qualification" character varying NOT NULL DEFAULT '', "academicDegree" character varying NOT NULL DEFAULT '', "specialties" character varying NOT NULL DEFAULT '', "advancedTraining" character varying NOT NULL DEFAULT '', "specGuardian" character varying NOT NULL DEFAULT '', "totalGuardian" character varying NOT NULL DEFAULT '', "avatar" character varying NOT NULL DEFAULT '', "publications" text NOT NULL, CONSTRAINT "PK_65c79cf781f8e00659381eb3d78" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "members_entity"`);
    }
}
exports.CreateMembers1641564992435 = CreateMembers1641564992435;
//# sourceMappingURL=1641564992435-CreateMembers.js.map