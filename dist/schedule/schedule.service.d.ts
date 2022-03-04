import { GroupNameDto } from '@app/schedule/dto/GroupName.dto';
import { FindGroupResponseInterface } from '@app/schedule/types/findGroupResponse.interface';
export declare class ScheduleService {
    findGroup(groupName: GroupNameDto): Promise<FindGroupResponseInterface | any>;
}
