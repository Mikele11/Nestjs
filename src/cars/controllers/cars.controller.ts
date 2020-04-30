import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Car } from '../entities/cars.entity';
import { CarsService } from '../services/cars.service';
import { CreateCarDto } from '../dbo/create-car.dto'

// @Crud({
//   model: {
//     type: Car
//   }
// })
// @Controller('cars')
// export class CarsController implements CrudController<Car>{
//   constructor(public service: CarsService){}
// }

@Controller('cars')
export class CarsController {
  constructor(private carsService: CarsService) {}

  @Get()
  async findAll(): Promise<Car[]> {
    return this.carsService.findAll();
  }
  @Get('manufacturer/:id')
  async findManufactures(@Param('id') id: string): Promise<Car> {
    return this.carsService.findManufactures(id);
  }

  @Post()
  create(@Body() createCarDto: CreateCarDto): Promise<Car> {
    return this.carsService.create(createCarDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Car> {
    return this.carsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.carsService.remove(id);
  }
}
