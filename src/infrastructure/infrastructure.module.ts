import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteRepository } from 'src/infrastructure/repository/cliente.repository';
import { Cliente } from 'src/domain/entity/cliente.entity';
import { Servidora } from 'src/domain/entity/servidora.entity';
import { ServidoraRepository } from 'src/infrastructure/repository/servidora.repository';
import { Servico } from 'src/domain/entity/servico.entity';
import { ServicoRepository } from 'src/infrastructure/repository/servico.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente, Servidora, Servico])],
  providers: [ClienteRepository, ServidoraRepository, ServicoRepository],
  exports: [ClienteRepository, ServidoraRepository, ServicoRepository, TypeOrmModule],
})

export class InfrastructureModule {}