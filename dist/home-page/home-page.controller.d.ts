import { HomePageService } from '@app/home-page/home-page.service';
import { UserEntity } from '@app/user/user.entity';
import { TopNewsDto } from '@app/home-page/dto/topNews.dto';
import { TopNewsResponseInterface } from '@app/home-page/types/TopNewsResponse.interface';
import { HomePageTopNewsEntity } from '@app/home-page/HomePageTopNews.entity';
import { DeleteResult } from 'typeorm';
export declare class HomePageController {
    private readonly homePageService;
    constructor(homePageService: HomePageService);
    findAll(currentUserId: number, query: any): Promise<{
        allTopNews: HomePageTopNewsEntity[];
        topNewsCount: number;
    }>;
    createTopNews(currentUser: UserEntity, topNewsDto: TopNewsDto): Promise<TopNewsResponseInterface>;
    deleteById(currentUserId: number, id: number): Promise<DeleteResult>;
    updateMember(newsDto: TopNewsDto, id: number): Promise<TopNewsResponseInterface>;
}
