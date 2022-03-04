"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddHomePageTopNews1644839498139 = void 0;
class AddHomePageTopNews1644839498139 {
    constructor() {
        this.name = 'AddHomePageTopNews1644839498139';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "home_page_top_news_entity" ("id" SERIAL NOT NULL, "title" character varying NOT NULL DEFAULT '', "text" character varying NOT NULL DEFAULT '', "icon" character varying NOT NULL DEFAULT '', CONSTRAINT "PK_5ef0d573bb04b4900a15d5dfedd" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "home_page_top_news_entity"`);
    }
}
exports.AddHomePageTopNews1644839498139 = AddHomePageTopNews1644839498139;
//# sourceMappingURL=1644839498139-AddHomePageTopNews.js.map