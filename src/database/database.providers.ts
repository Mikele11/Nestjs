  
import { Sequelize } from 'sequelize-typescript';
import { Manufacturer } from '../manufacturers/entities/manufacturers.entity';
import { Car } from '../cars/entities/cars.entity';
import { Owner } from '../owners/entities/owner.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
          const sequelize = new Sequelize({
            dialect: 'postgres',
            host: '127.0.0.1',
            port: 5432,
            username: 'admin',
            password: 'password',
            database: 'node_hero',
          });
            sequelize.addModels([Manufacturer, Car, Owner]);
            await sequelize.sync();
            return sequelize;
        }
    },
];
