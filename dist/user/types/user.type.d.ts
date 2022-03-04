import { UserEntity } from '@app/user/user.entity';
export declare type UserType = Omit<UserEntity, 'hashPassword'>;
