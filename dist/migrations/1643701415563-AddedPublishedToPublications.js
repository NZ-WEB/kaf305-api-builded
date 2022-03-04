"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddedPublishedToPublications1643701415563 = void 0;
class AddedPublishedToPublications1643701415563 {
    constructor() {
        this.name = 'AddedPublishedToPublications1643701415563';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "publications" ADD "published" character varying NOT NULL DEFAULT ''`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "publications" DROP COLUMN "published"`);
    }
}
exports.AddedPublishedToPublications1643701415563 = AddedPublishedToPublications1643701415563;
//# sourceMappingURL=1643701415563-AddedPublishedToPublications.js.map