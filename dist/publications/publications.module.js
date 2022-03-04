"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicationsModule = void 0;
const common_1 = require("@nestjs/common");
const publications_controller_1 = require("./publications.controller");
const publications_service_1 = require("./publications.service");
const typeorm_1 = require("@nestjs/typeorm");
const publication_entity_1 = require("./publication.entity");
const members_entity_1 = require("../members/members.entity");
let PublicationsModule = class PublicationsModule {
};
PublicationsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([publication_entity_1.PublicationEntity, members_entity_1.MembersEntity])],
        controllers: [publications_controller_1.PublicationsController],
        providers: [publications_service_1.PublicationsService],
    })
], PublicationsModule);
exports.PublicationsModule = PublicationsModule;
//# sourceMappingURL=publications.module.js.map