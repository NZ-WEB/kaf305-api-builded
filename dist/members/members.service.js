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
exports.MembersService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../user/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const members_entity_1 = require("./members.entity");
const typeorm_2 = require("typeorm");
const members_dto_1 = require("./dto/members.dto");
const memberResponse_interface_1 = require("./types/memberResponse.interface");
const slugify_1 = require("slugify");
const membersResponse_interface_1 = require("./types/membersResponse.interface");
const publication_entity_1 = require("../publications/publication.entity");
let MembersService = class MembersService {
    constructor(membersRepository, userRepository, publicationRepository) {
        this.membersRepository = membersRepository;
        this.userRepository = userRepository;
        this.publicationRepository = publicationRepository;
    }
    async findAll(query) {
        const queryBuilder = (0, typeorm_2.getRepository)(members_entity_1.MembersEntity).createQueryBuilder('members');
        const membersCount = await queryBuilder.getCount();
        if (query.tag) {
            queryBuilder.andWhere('members.tagList LIKE :tag', {
                tag: `%${query.tag}%`,
            });
        }
        if (query.limit) {
            queryBuilder.limit(query.limit);
        }
        if (query.offset) {
            queryBuilder.offset(query.offset);
        }
        const members = await queryBuilder.getMany();
        return { members, membersCount };
    }
    async createMember(currentUser, membersDto) {
        const member = new members_entity_1.MembersEntity();
        Object.assign(member, membersDto);
        if (!member.publications) {
            member.publications = [];
        }
        member.slug = this.getSlug(membersDto.fullName);
        return await this.membersRepository.save(member);
    }
    async findBySlug(slug) {
        const { id } = await this.membersRepository.findOne({ slug });
        if (!id) {
            throw new common_1.HttpException('???????????????? ?????????????? c ?????????? ID ???? ????????????', common_1.HttpStatus.NOT_FOUND);
        }
        return await this.membersRepository.findOne(id, {
            relations: ['publications'],
        });
    }
    async deleteMember(slug) {
        const members = await this.findBySlug(slug);
        if (!members) {
            throw new common_1.HttpException('???????????????? ?????????????? ???? ????????????', common_1.HttpStatus.NOT_FOUND);
        }
        return await this.membersRepository.delete({ slug });
    }
    async updateMember(membersDto, slug) {
        const members = await this.findBySlug(slug);
        if (!members) {
            throw new common_1.HttpException('members does not exist', common_1.HttpStatus.NOT_FOUND);
        }
        Object.assign(members, membersDto);
        return this.membersRepository.save(members);
    }
    async buildMembersResponse(members) {
        return { members };
    }
    getSlug(title) {
        return ((0, slugify_1.default)(title, { lower: true }) +
            '-' +
            ((Math.random() * Math.pow(36, 6)) | 0).toString());
    }
};
MembersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(members_entity_1.MembersEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(members_entity_1.MembersEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(publication_entity_1.PublicationEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], MembersService);
exports.MembersService = MembersService;
//# sourceMappingURL=members.service.js.map