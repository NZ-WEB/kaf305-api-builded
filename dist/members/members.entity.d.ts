import { PublicationEntity } from '@app/publications/publication.entity';
export declare class MembersEntity {
    id: number;
    slug: string;
    fullName: string;
    post: string;
    disciplines: string;
    education: string;
    qualification: string;
    academicDegree: string;
    specialties: string;
    advancedTraining: string;
    specGuardian: string;
    totalGuardian: string;
    avatar: string;
    publications: PublicationEntity[];
}
