import { Module } from '@nestjs/common';
import { CarsController } from './controllers/cars.controller';
import { CarsService } from './services/cars.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entities/cars.entity';
import { carsProviders } from './cars.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  controllers: [CarsController],
  providers: [
    CarsService,
    ...carsProviders,
  ],
  imports: [
    DatabaseModule
  ]
})
export class CarsModule {}