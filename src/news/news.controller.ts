import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { User } from '@app/user/decorators/user.decorator';
import { AuthGuard } from '@app/user/guards/auth.guard';
import { UserEntity } from '@app/user/user.entity';
import { DeleteResult } from 'typeorm';
import { NewsEntity } from '@app/news/news.entity';
import { NewsService } from '@app/news/news.service';
import { NewsDto } from '@app/news/dto/news.dto';
import { NewsResponseInterface } from '@app/news/types/NewsResponse.interface';

@Controller('allNews')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get('/news')
  async findAll(
    @User('id') currentUserId: number,
    @Query() query: any,
  ): Promise<{ allNews: NewsEntity[]; newsCount: number }> {
    return await this.newsService.findAll(query);
  }

  @Post('/news')
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  async createNews(
    @User() currentUser: UserEntity,
    @Body('news') newsDto: NewsDto,
  ): Promise<NewsResponseInterface> {
    const news = await this.newsService.createNews(currentUser, newsDto);
    return this.newsService.buildNewsResponse(news);
  }

  @Delete('/news/:id')
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  async deleteById(
    @User('id') currentUserId: number,
    @Param('id') id: number,
  ): Promise<DeleteResult> {
    return await this.newsService.deleteById(id);
  }

  @Put('/news/:id')
  @UseGuards(AuthGuard)
  async updateNews(
    @Body('news') newsDto: NewsDto,
    @Param('id') id: number,
  ): Promise<NewsResponseInterface> {
    const news = await this.newsService.updateNews(newsDto, id);
    return await this.newsService.buildNewsResponse(news);
  }
}
