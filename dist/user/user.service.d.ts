import { CreateUserDto } from '@app/user/dto/createUser.dto';
import { UserEntity } from '@app/user/user.entity';
import { Repository } from 'typeorm';
import { UserResponseInterface } from '@app/user/types/userResponse.interface';
import { LoginDto } from '@app/user/dto/login.dto';
import { UpdateUserDto } from '@app/user/dto/updateUser.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    createUser(createUserDto: CreateUserDto): Promise<UserEntity>;
    loginUser(loginUserDto: LoginDto): Promise<UserEntity>;
    findById(id: number): Promise<UserEntity>;
    updateUserData(updateUserDataDto: UpdateUserDto, currentUserId: number): Promise<UserEntity>;
    generateJwt(user: UserEntity): string;
    buildUserResponse(user: UserEntity): UserResponseInterface;
}
