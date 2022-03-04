import { UserService } from '@app/user/user.service';
import { CreateUserDto } from '@app/user/dto/createUser.dto';
import { UserResponseInterface } from '@app/user/types/userResponse.interface';
import { LoginDto } from '@app/user/dto/login.dto';
import { ExpressRequestInterface } from '@app/types/expressRequest.interface';
import { UserEntity } from '@app/user/user.entity';
import { UpdateUserDto } from '@app/user/dto/updateUser.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserDto: CreateUserDto): Promise<UserResponseInterface>;
    loginUser(loginUserDto: LoginDto): Promise<UserResponseInterface>;
    currentUser(request: ExpressRequestInterface, user: UserEntity): Promise<UserResponseInterface>;
    updateUserData(updateUserDto: UpdateUserDto, currentUserId: number): Promise<UserResponseInterface>;
}
