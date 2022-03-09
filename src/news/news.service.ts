import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, getRepository, Repository } from 'typeorm';
import { UserEntity } from '@app/user/user.entity';
import { NewsEntity } from '@app/news/news.entity';
import { NewsDto } from '@app/news/dto/news.dto';
import { NewsResponseInterface } from '@app/news/types/NewsResponse.interface';
import slugify from 'slugify';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(NewsEntity)
    private readonly newsRepository: Repository<NewsEntity>,
  ) {}

  async findAll(
    query: any,
  ): Promise<{ allNews: NewsEntity[]; newsCount: number }> {
    const queryBuilder = getRepository(NewsEntity).createQueryBuilder('news');

    const newsCount = await queryBuilder.getCount();

    if (query.limit) {
      queryBuilder.limit(query.limit);
    }

    if (query.offset) {
      queryBuilder.offset(query.offset);
    }

    const allNews = await queryBuilder.getMany();

    return { allNews, newsCount };
  }

  async createNews(
    currentUser: UserEntity,
    newsDto: NewsDto,
  ): Promise<NewsEntity> {
    const news = new NewsEntity();
    Object.assign(news, newsDto);
    news.slug = this.getSlug(newsDto.title);

    return await this.newsRepository.save(news);
  }

  async deleteById(id: number): Promise<DeleteResult> {
    const news = await this.findById(id);

    if (!news) {
      throw new HttpException('Новость не найдена', HttpStatus.NOT_FOUND);
    }

    return await this.newsRepository.delete({ id });
  }

  async findById(inputId: number): Promise<NewsEntity> {
    const { id } = await this.newsRepository.findOne({ id: inputId });

    if (!id) {
      throw new HttpException(
        'Новость с таким ID не найдена',
        HttpStatus.NOT_FOUND,
      );
    }

    return await this.newsRepository.findOne(id);
  }

  async updateNews(newsDto: NewsDto, id: number): Promise<NewsEntity> {
    const news = await this.findById(id);

    if (!news) {
      throw new HttpException(
        'Такой новости не существует',
        HttpStatus.NOT_FOUND,
      );
    }

    Object.assign(news, newsDto);
    return this.newsRepository.save(news);
  }

  async buildNewsResponse(news: NewsEntity): Promise<NewsResponseInterface> {
    return { news };
  }

  private getSlug(title: string): string {
    return (
      slugify(title, { lower: true }) +
      '-' +
      ((Math.random() * Math.pow(36, 6)) | 0).toString() // Приписываем рандрмные символы
    );
  }
}
