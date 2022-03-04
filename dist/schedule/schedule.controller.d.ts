import { ScheduleService } from '@app/schedule/schedule.service';
import { GroupNameDto } from '@app/schedule/dto/GroupName.dto';
import { FindGroupResponseInterface } from '@app/schedule/types/findGroupResponse.interface';
export declare class ScheduleController {
    private readonly scheduleService;
    constructor(scheduleService: ScheduleService);
    findGroup(groupNameDto: GroupNameDto): Promise<FindGroupResponseInterface>;
}
