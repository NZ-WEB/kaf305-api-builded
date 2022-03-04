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
exports.MembersController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../user/guards/auth.guard");
const user_decorator_1 = require("../user/decorators/user.decorator");
const user_entity_1 = require("../user/user.entity");
const members_service_1 = require("./members.service");
const members_dto_1 = require("./dto/members.dto");
const memberResponse_interface_1 = require("./types/memberResponse.interface");
const membersResponse_interface_1 = require("./types/membersResponse.interface");
let MembersController = class MembersController {
    constructor(membersService) {
        this.membersService = membersService;
    }
    async createMember(currentUser, membersDto) {
        const member = await this.membersService.createMember(currentUser, membersDto);
        return this.membersService.buildMembersResponse(member);
    }
    async findAll(currentUserId, query) {
        return await this.membersService.findAll(query);
    }
    async getMember(slug) {
        const member = await this.membersService.findBySlug(slug);
        return this.membersService.buildMembersResponse(member);
    }
    async deleteMember(currentUserId, slug) {
        return await this.membersService.deleteMember(slug);
    }
    async updateMember(memberDto, slug) {
        const member = await this.membersService.updateMember(memberDto, slug);
        return await this.membersService.buildMembersResponse(member);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Body)('members')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.UserEntity,
        members_dto_1.MembersDto]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "createMember", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_decorator_1.User)('id')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "getMember", null);
__decorate([
    (0, common_1.Delete)(':slug'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, user_decorator_1.User)('id')),
    __param(1, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "deleteMember", null);
__decorate([
    (0, common_1.Put)(':slug'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)('members')),
    __param(1, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [members_dto_1.MembersDto, String]),
    __metadata("design:returntype", Promise)
], MembersController.prototype, "updateMember", null);
MembersController = __decorate([
    (0, common_1.Controller)('members'),
    __metadata("design:paramtypes", [members_service_1.MembersService])
], MembersController);
exports.MembersController = MembersController;
//# sourceMappingURL=members.controller.js.map