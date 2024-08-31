import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteRepository } from 'src/infrastructure/repository/cliente.repository';
import { Cliente } from 'src/domain/entity/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  providers: [ClienteRepository],
  exports: [ClienteRepository],
})

export class InfrastructureModule {}