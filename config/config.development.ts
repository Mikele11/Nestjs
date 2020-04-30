import { Dialect } from 'sequelize/types';

export const config = {
    database: {
        dialect: 'postgres' as Dialect,
        host: '127.0.0.1',
        port: 5432,
        username: 'admin',
        password: 'password',
        database: 'node_hero',
        logging: false,
    }
};
