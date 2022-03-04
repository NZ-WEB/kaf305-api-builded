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
exports.HomePageController = void 0;
const common_1 = require("@nestjs/common");
const home_page_service_1 = require("./home-page.service");
const auth_guard_1 = require("../user/guards/auth.guard");
const user_decorator_1 = require("../user/decorators/user.decorator");
const user_entity_1 = require("../user/user.entity");
const topNews_dto_1 = require("./dto/topNews.dto");
const TopNewsResponse_interface_1 = require("./types/TopNewsResponse.interface");
const HomePageTopNews_entity_1 = require("./HomePageTopNews.entity");
let HomePageController = class HomePageController {
    constructor(homePageService) {
        this.homePageService = homePageService;
    }
    async findAll(currentUserId, query) {
        return await this.homePageService.findAll(query);
    }
    async createTopNews(currentUser, topNewsDto) {
        const news = await this.homePageService.createNews(currentUser, topNewsDto);
        return this.homePageService.buildTopNewsResponse(news);
    }
    async deleteById(currentUserId, id) {
        return await this.homePageService.deleteById(id);
    }
    async updateMember(newsDto, id) {
        const news = await this.homePageService.updateNews(newsDto, id);
        return await this.homePageService.buildTopNewsResponse(news);
    }
};
__decorate([
    (0, common_1.Get)('/news'),
    __param(0, (0, user_decorator_1.User)('id')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], HomePageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/news'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)('news')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        topNews_dto_1.TopNewsDto]),
    __metadata("design:returntype", Promise)
], HomePageController.prototype, "createTopNews", null);
__decorate([
    (0, common_1.Delete)('/news/:id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, user_decorator_1.User)('id')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], HomePageController.prototype, "deleteById", null);
__decorate([
    (0, common_1.Put)('/news/:id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)('news')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [topNews_dto_1.TopNewsDto, Number]),
    __metadata("design:returntype", Promise)
], HomePageController.prototype, "updateMember", null);
HomePageController = __decorate([
    (0, common_1.Controller)('home-page'),
    __metadata("design:paramtypes", [home_page_service_1.HomePageService])
], HomePageController);
exports.HomePageController = HomePageController;
//# sourceMappingURL=home-page.controller.js.map