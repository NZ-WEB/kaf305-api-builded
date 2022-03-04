"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ormconfig_1 = require("./ormconfig");
const ormseedconfig = Object.assign(Object.assign({}, ormconfig_1.default), { migrations: [__dirname + '/seeds/**/*{.ts,.js}'], cli: {
        migrationsDir: 'src/seeds',
    } });
exports.default = ormseedconfig;
//# sourceMappingURL=ormseedconfig.js.map