"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicationsController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../user/guards/auth.guard");
const CreatePublication_dto_1 = require("./dto/CreatePublication.dto");
const publications_service_1 = require("./publications.service");
const PublicationResponse_interface_1 = require("./types/PublicationResponse.interface");
const PublicationsResponse_interface_1 = require("./types/PublicationsResponse.interface");
const user_decorator_1 = require("../user/decorators/user.decorator");
const UpdatePublication_dto_1 = require("./dto/UpdatePublication.dto");
let PublicationsController = class PublicationsController {
    constructor(publicationService) {
        this.publicationService = publicationService;
    }
    async findAll(query) {
        return await this.publicationService.findAll(query);
    }
    async create(createPublicationDto) {
        const publication = await this.publicationService.createPublication(createPublicationDto);
        return this.publicationService.buildPublicationsResponse(publication);
    }
    async deleteBySlug(currentUserId, slug) {
        return await this.publicationService.deleteBySlug(slug);
    }
    async updatePublication(publicationDto, slug) {
        const publication = await this.publicationService.updatePublication(publicationDto, slug);
        return await this.publicationService.buildPublicationsResponse(publication);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PublicationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)('publication')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreatePublication_dto_1.CreatePublicationDto]),
    __metadata("design:returntype", Promise)
], PublicationsController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':slug'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, user_decorator_1.User)('id')),
    __param(1, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], PublicationsController.prototype, "deleteBySlug", null);
__decorate([
    (0, common_1.Put)(':slug'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)('publication')),
    __param(1, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UpdatePublication_dto_1.UpdatePublicationDto, String]),
    __metadata("design:returntype", Promise)
], PublicationsController.prototype, "updatePublication", null);
PublicationsController = __decorate([
    (0, common_1.Controller)('publications'),
    __metadata("design:paramtypes", [publications_service_1.PublicationsService])
], PublicationsController);
exports.PublicationsController = PublicationsController;
//# sourceMappingURL=publications.controller.js.map