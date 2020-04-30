import { Module } from '@nestjs/common';
import { OwnersController } from './controllers/owners.controller';
import { OwnersService } from './services/owners.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { ownersProviders } from './owners.providers';
import { carsProviders } from '../cars/cars.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  controllers: [OwnersController],
  providers: [
    OwnersService,
    ...ownersProviders,
    ...carsProviders
  ],
  imports: [
    DatabaseModule
  ]
})
export class OwnersModule {}
