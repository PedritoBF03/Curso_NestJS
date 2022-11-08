import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

  constructor(

    private readonly carsService: CarsService

  ) {}

  //private cars = ['Toyota', 'Honda', 'Jeep'];

  @Get()
  getAllCars() {
    // return this.cars

    return this.carsService.findAll()
  }

  @Get(':id')
  getCarsById( @Param('id') id: string ) {
    console.log({id})
    //Devuelve el id que estamos escogiendo
    //return{
    //  id
    //}

    //Devuelve el coche en el lugar del id
    // return this.cars[id];

    //Usamos el servicio para elegir un solo coche
    return this.carsService.findOneById( +id );
  }

  @Post()
  createCar( @Body() body: any ) {
    return body;
  }

  @Patch( ':id' )
  updateCar( @Param('id', ParseIntPipe) id: number, @Body() body: any ) {
    return body;
  }

  @Delete( ':id' )
  deleteCar ( @Param('id', ParseIntPipe) id: number ){
    return {
      method: 'delete',
      id
    }
  }

}
