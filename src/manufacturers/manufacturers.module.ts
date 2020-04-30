import { Module } from '@nestjs/common';
import { ManufacturersController } from './controllers/manufacturers.controller';
import { ManufacturersService } from './services/manufacturers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Manufacturer } from './entities/manufacturers.entity';
import { manufacturersProviders } from './manufacturers.providers';
import { carsProviders } from '../cars/cars.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  controllers: [ManufacturersController],
  providers: [
    ManufacturersService,
    ...manufacturersProviders,
    ...carsProviders
  ],
  imports: [
    DatabaseModule
  ]
})
export class ManufacturersModule {}
