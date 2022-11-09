import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {

    private cars: Car[]= [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla',
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic',
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee',
        }
    ];


    findAll() {
        return this.cars;
    }

    findOneById( id: string ) {
        
        const car = this.cars.find( car => car.id === id );
        
        //Excepción en caso de que el coche no exista
        if ( !car ) {
            //Este es la excepcion, en los parentesis del final mostramos un mensaje para el cliente
            throw new NotFoundException(`El coche con id ${ id } no fue encontrado`)
        }

        return car;
    }


}
