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
exports.PublicationsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const publication_entity_1 = require("./publication.entity");
const members_entity_1 = require("../members/members.entity");
const PublicationResponse_interface_1 = require("./types/PublicationResponse.interface");
const CreatePublication_dto_1 = require("./dto/CreatePublication.dto");
const slugify_1 = require("slugify");
const PublicationsResponse_interface_1 = require("./types/PublicationsResponse.interface");
const UpdatePublication_dto_1 = require("./dto/UpdatePublication.dto");
let PublicationsService = class PublicationsService {
    constructor(publicationRepository, membersRepository) {
        this.publicationRepository = publicationRepository;
        this.membersRepository = membersRepository;
    }
    async findAll(query) {
        const queryBuilder = (0, typeorm_2.getRepository)(publication_entity_1.PublicationEntity).createQueryBuilder('members');
        if (query.limit) {
            queryBuilder.limit(query.limit);
        }
        if (query.offset) {
            queryBuilder.offset(query.offset);
        }
        const publications = await queryBuilder.getMany();
        return { publications };
    }
    async createPublication(publicationDto) {
        const id = publicationDto.authorId;
        const publication = new publication_entity_1.PublicationEntity();
        Object.assign(publication, publicationDto);
        publication.slug = this.getSlug(publicationDto.title);
        await this.publicationRepository.save(publication);
        const addedPublication = await this.publicationRepository.findOne({
            title: publicationDto.title,
        });
        const author = await this.membersRepository.findOne(id, {
            relations: ['publications'],
        });
        if (!author) {
            throw new common_1.HttpException('Такого сотрудника нет', common_1.HttpStatus.NOT_FOUND);
        }
        author.publications.push(addedPublication);
        await this.membersRepository.save(author);
        return await this.publicationRepository.save(publication);
    }
    async findBySlug(slug) {
        const { id } = await this.publicationRepository.findOne({ slug });
        if (!id) {
            throw new common_1.HttpException('Публикация с таким ID не найдена', common_1.HttpStatus.NOT_FOUND);
        }
        return await this.publicationRepository.findOne(id);
    }
    async buildPublicationsResponse(publications) {
        return { publications };
    }
    async deleteBySlug(slug) {
        const publications = await this.findBySlug(slug);
        if (!publications) {
            throw new common_1.HttpException('Работник кафедры не найден', common_1.HttpStatus.NOT_FOUND);
        }
        return await this.publicationRepository.delete({ slug });
    }
    async updatePublication(publicationDto, slug) {
        const publication = await this.findBySlug(slug);
        if (!publication) {
            throw new common_1.HttpException('Такой публикации нет', common_1.HttpStatus.NOT_FOUND);
        }
        Object.assign(publication, publicationDto);
        return this.publicationRepository.save(publication);
    }
    getSlug(title) {
        return ((0, slugify_1.default)(title, { lower: true }) +
            '-' +
            ((Math.random() * Math.pow(36, 6)) | 0).toString());
    }
};
PublicationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(publication_entity_1.PublicationEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(members_entity_1.MembersEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PublicationsService);
exports.PublicationsService = PublicationsService;
//# sourceMappingURL=publications.service.js.map