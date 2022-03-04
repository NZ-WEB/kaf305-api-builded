"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const tag_module_1 = require("./tag/tag.module");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./user/user.module");
const ormconfig_1 = require("./ormconfig");
const auth_middleware_1 = require("./user/middlewares/auth.middleware");
const members_module_1 = require("./members/members.module");
const publications_module_1 = require("./publications/publications.module");
const home_page_module_1 = require("./home-page/home-page.module");
const schedule_module_1 = require("./schedule/schedule.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes({
            path: '*',
            method: common_1.RequestMethod.ALL,
        });
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            tag_module_1.TagModule,
            typeorm_1.TypeOrmModule.forRoot(ormconfig_1.default),
            user_module_1.UserModule,
            members_module_1.MembersModule,
            publications_module_1.PublicationsModule,
            home_page_module_1.HomePageModule,
            schedule_module_1.ScheduleModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map