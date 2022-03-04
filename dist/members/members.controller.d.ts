import { UserEntity } from '@app/user/user.entity';
import { MembersService } from '@app/members/members.service';
import { MembersDto } from '@app/members/dto/members.dto';
import { MemberResponseInterface } from '@app/members/types/memberResponse.interface';
import { MembersResponseInterface } from '@app/members/types/membersResponse.interface';
export declare class MembersController {
    private readonly membersService;
    constructor(membersService: MembersService);
    createMember(currentUser: UserEntity, membersDto: MembersDto): Promise<MemberResponseInterface>;
    findAll(currentUserId: number, query: any): Promise<MembersResponseInterface>;
    getMember(slug: string): Promise<MemberResponseInterface>;
    deleteMember(currentUserId: number, slug: string): Promise<import("typeorm").DeleteResult>;
    updateMember(memberDto: MembersDto, slug: string): Promise<MemberResponseInterface>;
}
