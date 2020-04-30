import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { Owner } from '../entities/owner.entity';
import { OwnersService } from '../services/owners.service';
import { CreateOwnerDto } from '../dbo/create-owner.dto'
import { Car } from '../../cars/entities/cars.entity';

@Controller('owners')
export class OwnersController {
  constructor(private ownersService: OwnersService) {}

  @Get()
  async findAll(): Promise<Owner[]> {
    return this.ownersService.findAll();
  }

  @Post()
  create(@Body() createOwnerDto: CreateOwnerDto): Promise<Owner> {
    return this.ownersService.create(createOwnerDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Owner> {
    return this.ownersService.findOne(id);
  }

  @Delete('/deletenew')
  removeOwners(): Promise<Car[]> {
    return this.ownersService.removeOwners();
  }

  @Delete('/delowner/:id')
  remove(@Param('id') id: string): Promise<void> {
    return this.ownersService.remove(id);
  }

}
