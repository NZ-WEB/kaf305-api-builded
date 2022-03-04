import { DeleteResult, Repository } from 'typeorm';
import { PublicationEntity } from '@app/publications/publication.entity';
import { MembersEntity } from '@app/members/members.entity';
import { PublicationResponseInterface } from '@app/publications/types/PublicationResponse.interface';
import { CreatePublicationDto } from '@app/publications/dto/CreatePublication.dto';
import { PublicationsResponseInterface } from '@app/publications/types/PublicationsResponse.interface';
import { UpdatePublicationDto } from '@app/publications/dto/UpdatePublication.dto';
export declare class PublicationsService {
    private readonly publicationRepository;
    private readonly membersRepository;
    constructor(publicationRepository: Repository<PublicationEntity>, membersRepository: Repository<MembersEntity>);
    findAll(query: any): Promise<PublicationsResponseInterface>;
    createPublication(publicationDto: CreatePublicationDto): Promise<PublicationEntity>;
    findBySlug(slug: string): Promise<PublicationEntity>;
    buildPublicationsResponse(publications: PublicationEntity): Promise<PublicationResponseInterface>;
    deleteBySlug(slug: string): Promise<DeleteResult>;
    updatePublication(publicationDto: UpdatePublicationDto, slug: string): Promise<PublicationEntity>;
    private getSlug;
}
