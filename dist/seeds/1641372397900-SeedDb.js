"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedDb1641372397900 = void 0;
class SeedDb1641372397900 {
    constructor() {
        this.name = 'SeedDb1641372397900';
    }
    async up(queryRunner) {
        await queryRunner.query(`INSERT INTO tags (name) VALUES ('Программирование'), ('Электроника'), ('Робототехника')`);
        await queryRunner.query(`INSERT INTO users (username, email, password) VALUES ('admin', 'foolstack@mai.ru', '$2b$10$svomFk0LNGy9KlYvutmBfOu3Mr4djeIA8CGKEpS99AUrxQe9ALrYa')`);
        await queryRunner.query(`INSERT INTO members_entity (slug, "fullName", post, disciplines, education, qualification, "academicDegree", specialties, "advancedTraining", "specGuardian", "totalGuardian", avatar, id) VALUES ('antonov-827707490' ,'Антонов Дмитрий Александрович', 'Доцент', 'Испытания приборов и систем, Методы оптимизации в измерительно-управляющих системах и комплексах, Бортовое и наземное', 'Высшее', 'Инженер', 'Кандидат технических наук', 'Управляющие, пилотажно-навигационные и электроэнергетические комплексы летательных аппаратов', 'Интеллектуальные системы управления и обработки информации, объем 72 часа, удостоверение № 180 000/092593 от 30.12.2014, ФГБОУ ВО "Московский авиационный институт (национальный исследовательский университет)"', '16', '14', 'https://mai.ru/upload/iblock/163/antonov_resize.jpg', 1)`);
    }
    async down() { }
}
exports.SeedDb1641372397900 = SeedDb1641372397900;
//# sourceMappingURL=1641372397900-SeedDb.js.map