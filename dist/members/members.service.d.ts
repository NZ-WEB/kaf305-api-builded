import { UserEntity } from '@app/user/user.entity';
import { MembersEntity } from '@app/members/members.entity';
import { DeleteResult, Repository } from 'typeorm';
import { MembersDto } from '@app/members/dto/members.dto';
import { MemberResponseInterface } from '@app/members/types/memberResponse.interface';
import { MembersResponseInterface } from '@app/members/types/membersResponse.interface';
import { PublicationEntity } from '@app/publications/publication.entity';
export declare class MembersService {
    private readonly membersRepository;
    private readonly userRepository;
    private readonly publicationRepository;
    constructor(membersRepository: Repository<MembersEntity>, userRepository: Repository<UserEntity>, publicationRepository: Repository<PublicationEntity>);
    findAll(query: any): Promise<MembersResponseInterface>;
    createMember(currentUser: UserEntity, membersDto: MembersDto): Promise<MembersEntity>;
    findBySlug(slug: string): Promise<MembersEntity>;
    deleteMember(slug: string): Promise<DeleteResult>;
    updateMember(membersDto: MembersDto, slug: string): Promise<MembersEntity>;
    buildMembersResponse(members: MembersEntity): Promise<MemberResponseInterface>;
    private getSlug;
}
