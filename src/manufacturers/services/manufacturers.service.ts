// import { Injectable } from '@nestjs/common';
// import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
// import { Manufacturer } from '../entities/manufacturers.entity';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';

// @Injectable()
// export class ManufacturersService extends TypeOrmCrudService<Manufacturer>{
//   constructor(@InjectRepository(Manufacturer) manufacturersRepository: Repository<Manufacturer>){
//     super(manufacturersRepository);
//   }
// }

import { Injectable, Inject } from '@nestjs/common';
import { Manufacturer } from '../entities/manufacturers.entity';
import { CreateManufacturerDto } from '../dbo/create-manufacturer.dto';
import { Car } from '../../cars/entities/cars.entity';

@Injectable()
export class ManufacturersService {
  constructor(
    @Inject('MANUFACTURERS_REPOSITORY') private manufacturersRepository: typeof Manufacturer,
    @Inject('CARS_REPOSITORY') private carsRepository: typeof Car
    ) {}

  async findAll(): Promise<Manufacturer[]> {
    return this.manufacturersRepository.findAll<Manufacturer>();
  }

  async create(createManufacturerDto: CreateManufacturerDto): Promise<Manufacturer> {
    const manufacturer = new Manufacturer();
    const car = await this.carsRepository.findOne({
      where: {
        id: createManufacturerDto.carId
      },
    });

    manufacturer.carId = car.id;
    manufacturer.name = createManufacturerDto.name;
    manufacturer.phone = createManufacturerDto.phone;
    manufacturer.siret = createManufacturerDto.siret;
    return await manufacturer.save();
  }

  async findOne(id: string): Promise<Manufacturer> {
    return await this.manufacturersRepository.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const manufacturer = await this.findOne(id);
    await manufacturer.destroy();
  }
}