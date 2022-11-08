import { Module } from '@nestjs/common';
import { AlumnosModule } from './alumnos/alumnos.module';

@Module({
  imports: [AlumnosModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
