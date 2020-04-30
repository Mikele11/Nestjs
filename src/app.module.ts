import { Module } from '@nestjs/common';
import { ManufacturersModule } from './manufacturers/manufacturers.module';
import { OwnersModule } from './owners/owners.module';
import { CarsModule } from './cars/cars.module';
import { Manufacturer } from './manufacturers/entities/manufacturers.entity';
import { Car } from './cars/entities/cars.entity';
import { Owner } from './owners/entities/owner.entity';


@Module({
    imports: [ 
       ManufacturersModule,
       OwnersModule, 
       CarsModule
  ]
})
export class AppModule {}
