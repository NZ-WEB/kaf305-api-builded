"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const common_1 = require("@nestjs/common");
const expressRequest_interface_1 = require("../../types/expressRequest.interface");
exports.User = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    if (!request.user) {
        return null;
    }
    if (data) {
        return request.user[data];
    }
    return request.user;
});
//# sourceMappingURL=user.decorator.js.map