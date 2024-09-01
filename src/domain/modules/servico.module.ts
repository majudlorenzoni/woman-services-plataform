import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Servico } from 'src/domain/entity/servico.entity';
import { ServicoController } from 'src/application/servico/controller/servico.controller';
import { ServicoService } from '../services/servico.service';
import { ServicoTipoModule } from './servico-tipo.module';
import { CreateServicoUseCase } from 'src/application/servico/use-cases/create-servico.use-case';
import { UpdateServicoUseCase } from 'src/application/servico/use-cases/update-servico.use-case';
import { DeleteServicoUseCase } from 'src/application/servico/use-cases/delete-servico.use-case';
import { FindAllServicosUseCase } from 'src/application/servico/use-cases/find-all-servico.use-case';
import { FindByTipoServicoUseCase } from 'src/application/servico/use-cases/find-by-tipo.use-case';
import { FindByIdServicoUseCase } from 'src/application/servico/use-cases/find-by-id-servico.use-case';
import { ServicoTipoRepository } from 'src/infrastructure/repository/servico-tipo.repository';
import { ServicoRepository } from 'src/infrastructure/repository/servico.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Servico]), ServicoTipoModule],
  controllers: [ServicoController],
  providers: [
    ServicoTipoRepository,
    ServicoService,
    ServicoRepository,
    CreateServicoUseCase,
    UpdateServicoUseCase,
    DeleteServicoUseCase,
    FindAllServicosUseCase,
    FindByTipoServicoUseCase,
    FindByIdServicoUseCase,
  ],
  exports: [ServicoService],
})
export class ServicoModule {}
