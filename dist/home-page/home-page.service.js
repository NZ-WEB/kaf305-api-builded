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
exports.HomePageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const HomePageTopNews_entity_1 = require("./HomePageTopNews.entity");
const user_entity_1 = require("../user/user.entity");
const topNews_dto_1 = require("./dto/topNews.dto");
const TopNewsResponse_interface_1 = require("./types/TopNewsResponse.interface");
const AllTopNewsResponse_interface_1 = require("./types/AllTopNewsResponse.interface");
let HomePageService = class HomePageService {
    constructor(topNewsRepository) {
        this.topNewsRepository = topNewsRepository;
    }
    async findAll(query) {
        const queryBuilder = (0, typeorm_2.getRepository)(HomePageTopNews_entity_1.HomePageTopNewsEntity).createQueryBuilder('topNews');
        const topNewsCount = await queryBuilder.getCount();
        if (query.limit) {
            queryBuilder.limit(query.limit);
        }
        if (query.offset) {
            queryBuilder.offset(query.offset);
        }
        const allTopNews = await queryBuilder.getMany();
        return { allTopNews, topNewsCount };
    }
    async createNews(currentUser, topNewsDto) {
        const news = new HomePageTopNews_entity_1.HomePageTopNewsEntity();
        Object.assign(news, topNewsDto);
        return await this.topNewsRepository.save(news);
    }
    async deleteById(id) {
        const news = await this.findById(id);
        if (!news) {
            throw new common_1.HttpException('Работник кафедры не найден', common_1.HttpStatus.NOT_FOUND);
        }
        return await this.topNewsRepository.delete({ id });
    }
    async findById(inputId) {
        const { id } = await this.topNewsRepository.findOne({ id: inputId });
        if (!id) {
            throw new common_1.HttpException('Новость с таким ID не найдена', common_1.HttpStatus.NOT_FOUND);
        }
        return await this.topNewsRepository.findOne(id);
    }
    async updateNews(newsDto, id) {
        const news = await this.findById(id);
        if (!news) {
            throw new common_1.HttpException('Такой новости не существует', common_1.HttpStatus.NOT_FOUND);
        }
        Object.assign(news, newsDto);
        return this.topNewsRepository.save(news);
    }
    async buildTopNewsResponse(topNews) {
        return { topNews };
    }
    async buildAllTopNewsResponse(allTopNews) {
        return { allTopNews };
    }
};
HomePageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(HomePageTopNews_entity_1.HomePageTopNewsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HomePageService);
exports.HomePageService = HomePageService;
//# sourceMappingURL=home-page.service.js.map