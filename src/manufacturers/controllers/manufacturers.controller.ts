import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Manufacturer } from '../entities/manufacturers.entity';
import { ManufacturersService } from '../services/manufacturers.service';
import { CreateManufacturerDto } from '../dbo/create-manufacturer.dto'

// @Crud({
//   model: {
//     type: Manufacturer
//   }
// })
// @Controller('manufacturers')
// export class ManufacturersController implements CrudController<Manufacturer>{
//   constructor(public service: ManufacturersService){}
// }

@Controller('manufacturers')
export class ManufacturersController {
  constructor(private manufacturersService: ManufacturersService) {}


  @Get()
  async findAll(): Promise<Manufacturer[]> {
    return this.manufacturersService.findAll();
  }

  @Post()
  create(@Body() createManufacturerDto: CreateManufacturerDto): Promise<Manufacturer> {
    return this.manufacturersService.create(createManufacturerDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Manufacturer> {
    return this.manufacturersService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.manufacturersService.remove(id);
  }
}