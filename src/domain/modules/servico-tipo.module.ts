import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicoTipoService } from '../services/servico-tipo.service';
import { ServicoTipoController } from 'src/application/servico-tipo/controller/servico-tipo.controller';
import { ServicoTipo } from 'src/domain/entity/servico-tipo.entity';
import { ServicoTipoRepository } from 'src/infrastructure/repository/servico-tipo.repository';
import { CreateServicoTipoUseCase } from 'src/application/servico-tipo/use-case/create-servico-tipo-use-case';
import { DeleteServicoTipoUseCase } from 'src/application/servico-tipo/use-case/delete-servico-tipo-use-case';
import { FindAllServicoTiposUseCase } from 'src/application/servico-tipo/use-case/find-all-servico-tipo-use-case';
import { FindServicoTiposByTipoIdUseCase } from 'src/application/servico-tipo/use-case/find-servico-tipos-tipo-id-use-case';
import { UpdateServicoTipoUseCase } from 'src/application/servico-tipo/use-case/update-servico-tipo-use-case';

@Module({
  imports: [TypeOrmModule.forFeature([ServicoTipo])],
  controllers: [ServicoTipoController],
  providers: [
    ServicoTipoService,
    ServicoTipoRepository,
    CreateServicoTipoUseCase,
    DeleteServicoTipoUseCase,
    FindAllServicoTiposUseCase,
    FindServicoTiposByTipoIdUseCase,
    UpdateServicoTipoUseCase,
  ],
  exports: [ServicoTipoService],
})
export class ServicoTipoModule {}
