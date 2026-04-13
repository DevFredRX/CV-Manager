"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmTestConfig = void 0;
exports.typeOrmTestConfig = {
    type: 'better-sqlite3',
    database: ':memory:',
    entities: [__dirname + '/../src/**/*.entity{.ts,.js}'],
    synchronize: true
};
//# sourceMappingURL=setup-typeorm.js.map