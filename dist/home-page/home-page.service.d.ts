import { DeleteResult, Repository } from 'typeorm';
import { HomePageTopNewsEntity } from '@app/home-page/HomePageTopNews.entity';
import { UserEntity } from '@app/user/user.entity';
import { TopNewsDto } from '@app/home-page/dto/topNews.dto';
import { TopNewsResponseInterface } from '@app/home-page/types/TopNewsResponse.interface';
import { AllTopNewsResponseInterface } from '@app/home-page/types/AllTopNewsResponse.interface';
export declare class HomePageService {
    private readonly topNewsRepository;
    constructor(topNewsRepository: Repository<HomePageTopNewsEntity>);
    findAll(query: any): Promise<{
        allTopNews: HomePageTopNewsEntity[];
        topNewsCount: number;
    }>;
    createNews(currentUser: UserEntity, topNewsDto: TopNewsDto): Promise<HomePageTopNewsEntity>;
    deleteById(id: number): Promise<DeleteResult>;
    findById(inputId: number): Promise<HomePageTopNewsEntity>;
    updateNews(newsDto: TopNewsDto, id: number): Promise<HomePageTopNewsEntity>;
    buildTopNewsResponse(topNews: HomePageTopNewsEntity): Promise<TopNewsResponseInterface>;
    buildAllTopNewsResponse(allTopNews: HomePageTopNewsEntity[]): Promise<AllTopNewsResponseInterface>;
}
