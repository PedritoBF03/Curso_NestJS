import { Controller, Get, Param } from '@nestjs/common';

@Controller('alumnos')
export class AlumnosController {

    private nombres = ['Pedro', 'Juan', 'Antonio', 'Luisa'];

    @Get()
    getAllAlumnos() {
        return this.nombres;
    }

    @Get(':id')
    getAlumnosById( @Param('id') id: string ) {
        // return{
        //     id
        // }
        return this.nombres[id]
    }

}
