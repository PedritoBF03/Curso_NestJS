import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla',
        },
        {
            id: 2,
            brand: 'Honda',
            model: 'Civic',
        },
        {
            id: 3,
            brand: 'Jeep',
            model: 'Cherokee',
        }
    ];


    findAll() {
        return this.cars;
    }

    findOneById( id: number ) {
        
        const car = this.cars.find( car => car.id === id );
        
        //Excepción en caso de que el coche no exista
        if ( !car ) {
            //Este es la excepcion, en los parentesis del final mostramos un mensaje para el cliente
            throw new NotFoundException(`El coche con id ${ id } no fue encontrado`)
        }

        return car;
    }


}
