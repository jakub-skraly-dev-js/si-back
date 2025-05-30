import { Module } from '@nestjs/common';
import { TurnoController } from './turno.controller';
import { TurnoService } from './turno.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Turno } from './turno.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Turno])],
  controllers: [TurnoController],
  providers: [TurnoService],
  exports:[TurnoService]
})
export class TurnoModule {}
