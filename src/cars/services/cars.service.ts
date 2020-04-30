import { Injectable, Inject } from '@nestjs/common';
import { Car } from '../entities/cars.entity';
import { CreateCarDto } from '../dbo/create-car.dto'
import { Manufacturer } from '../../manufacturers/entities/manufacturers.entity';
import { Owner } from '../../owners/entities/owner.entity'

@Injectable()
export class CarsService {
  constructor(
    @Inject('CARS_REPOSITORY') private carsRepository: typeof Car) {}

  async findAll(): Promise<Car[]> {
    return this.carsRepository.findAll({
      include: [Manufacturer, Owner]
    });
  }

  async findManufactures(id: string): Promise<Car>  {
    return await this.carsRepository.findOne({
      where: {
        id
      },
      include: [Manufacturer],
      attributes: ['id']
    });
  }

  async create(createCarDto: CreateCarDto): Promise<Car> {
    const car = new Car();
    car.price = createCarDto.price;
    // car.firstRegistrationDate = new Date();
    car.firstRegistrationDate = createCarDto.firstRegistrationDate;
    return await car.save();
  }

  async findOne(id: string): Promise<Car> {
    return await this.carsRepository.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const car = await this.findOne(id);
    await car.destroy();
  }
}