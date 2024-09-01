import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Solicitacao } from 'src/domain/entity/solicitacao.entity';
import { SolicitacaoService } from '../services/solicitacao.service';
import { SolicitacaoController } from 'src/application/solicitacao/controller/solicitacao.controller';
import { CreateSolicitacaoUseCase } from 'src/application/solicitacao/use-cases/create-solicitacao.use-case';
import { DeleteSolicitacaoUseCase } from 'src/application/solicitacao/use-cases/delete-solicitacao.use-case';
import { FindAllSolicitacoesUseCase } from 'src/application/solicitacao/use-cases/find-all-solicitacoes.use-case';
import { FindByIdSolicitacaoUseCase } from 'src/application/solicitacao/use-cases/find-by-id-solicitacao.use-case';
import { FindByClienteUseCase } from 'src/application/solicitacao/use-cases/find-by-cliente.use-case';
import { FindByServicoUseCase } from 'src/application/solicitacao/use-cases/find-by-servico.use-case';
import { UpdateSolicitacaoUseCase } from 'src/application/solicitacao/use-cases/update-solicitacao-use-case';
import { SolicitacaoRepository } from 'src/infrastructure/repository/solicitacao.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Solicitacao])],
  controllers: [SolicitacaoController],
  providers: [
    SolicitacaoService,
    SolicitacaoRepository,
    CreateSolicitacaoUseCase,
    DeleteSolicitacaoUseCase,
    FindAllSolicitacoesUseCase,
    FindByIdSolicitacaoUseCase,
    FindByClienteUseCase,
    FindByServicoUseCase,
    UpdateSolicitacaoUseCase,
  ],
  exports: [
    SolicitacaoRepository,
    CreateSolicitacaoUseCase,
    DeleteSolicitacaoUseCase,
    FindAllSolicitacoesUseCase,
    FindByIdSolicitacaoUseCase,
    FindByClienteUseCase,
    FindByServicoUseCase,
    UpdateSolicitacaoUseCase,
  ],
})
export class SolicitacaoModule {}