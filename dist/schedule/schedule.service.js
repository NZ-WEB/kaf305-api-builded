"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleService = void 0;
const common_1 = require("@nestjs/common");
const GroupName_dto_1 = require("./dto/GroupName.dto");
const axios_1 = require("axios");
const findGroupResponse_interface_1 = require("./types/findGroupResponse.interface");
let ScheduleService = class ScheduleService {
    async findGroup(groupName) {
        console.log(groupName);
        const res = await axios_1.default
            .get(`https://jutter.online/mai/api/groups/search/${groupName.groupName}`, {
            method: 'GET',
            headers: {
                ApiKey: process.env.VUE_APP_SCHEDULE_API_KEY,
                'Content-Type': 'application/json',
            },
        })
            .catch((e) => {
            throw new common_1.HttpException(e, common_1.HttpStatus.BAD_REQUEST);
        });
        return res;
    }
};
ScheduleService = __decorate([
    (0, common_1.Injectable)()
], ScheduleService);
exports.ScheduleService = ScheduleService;
//# sourceMappingURL=schedule.service.js.map