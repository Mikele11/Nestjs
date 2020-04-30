import { Injectable, Inject } from '@nestjs/common';
import { Owner } from '../entities/owner.entity';
import { CreateOwnerDto } from '../dbo/create-owner.dto'
import { Car } from '../../cars/entities/cars.entity';
import { Manufacturer } from '../../manufacturers/entities/manufacturers.entity';
import { Sequelize } from 'sequelize-typescript';
import { Op } from "sequelize";

@Injectable()
export class OwnersService {
  constructor(
    @Inject('OWNERS_REPOSITORY') private ownersRepository: typeof Owner,
    @Inject('CARS_REPOSITORY') private carsRepository: typeof Car
    ) {}

  async findAll(): Promise<Owner[]> {
    return this.ownersRepository.findAll<Owner>();
  }

  async create(createOwnerDto: CreateOwnerDto): Promise<Owner> {
    const owner = new Owner();
    owner.carId = createOwnerDto.carId;
    owner.name = createOwnerDto.name;
    owner.purchaseDate = createOwnerDto.purchaseDate;

    return await owner.save();
  }

  async findOne(id: string): Promise<Owner> {
    return await this.ownersRepository.findOne({
      where: {
        id,
      },
    });
  }

  async removeOwners(): Promise<Car[]> {
    const today = new Date ();
    today.setMonth(today.getMonth() - 18);

    await this.ownersRepository.destroy({
      where: { 
        purchaseDate: {
          [Op.gte]: today
        }
       }
    });

    const endDate = new Date ();
    endDate.setMonth(endDate.getMonth() - 12);
    await this.carsRepository.update({
      price: Sequelize.literal('price * 1.2')
    },{
      where: { 
        firstRegistrationDate: {
          [Op.and]: {
            [Op.lte]: endDate,
            [Op.gte]: today
          }
        }
       }
    });

    return this.carsRepository.findAll({
      include: [Manufacturer, Owner]
    });
    
  }

  async remove(id: string): Promise<void> {
    const owner = await this.findOne(id);
    await owner.destroy();
  }
}