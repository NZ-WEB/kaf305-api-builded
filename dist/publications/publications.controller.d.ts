import { CreatePublicationDto } from '@app/publications/dto/CreatePublication.dto';
import { PublicationsService } from '@app/publications/publications.service';
import { PublicationResponseInterface } from '@app/publications/types/PublicationResponse.interface';
import { PublicationsResponseInterface } from '@app/publications/types/PublicationsResponse.interface';
import { DeleteResult } from 'typeorm';
import { UpdatePublicationDto } from '@app/publications/dto/UpdatePublication.dto';
export declare class PublicationsController {
    private readonly publicationService;
    constructor(publicationService: PublicationsService);
    findAll(query: any): Promise<PublicationsResponseInterface>;
    create(createPublicationDto: CreatePublicationDto): Promise<PublicationResponseInterface>;
    deleteBySlug(currentUserId: number, slug: string): Promise<DeleteResult>;
    updatePublication(publicationDto: UpdatePublicationDto, slug: string): Promise<PublicationResponseInterface>;
}
