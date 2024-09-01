import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from 'src/domain/entity/cliente.entity';
import { Servidora } from 'src/domain/entity/servidora.entity';
import { Servico } from 'src/domain/entity/servico.entity';
import { Solicitacao } from 'src/domain/entity/solicitacao.entity';
import { TipoServico } from 'src/domain/entity/tipo-servico.entity';
import { ServicoTipo } from 'src/domain/entity/servico-tipo.entity';
import { ClienteRepository } from 'src/infrastructure/repository/cliente.repository';
import { ServidoraRepository } from 'src/infrastructure/repository/servidora.repository';
import { SolicitacaoRepository } from './repository/solicitacao.repository';
import { ServicoRepository } from 'src/infrastructure/repository/servico.repository';


@Module({
  imports: [TypeOrmModule.forFeature([Cliente, Servidora, Servico, Solicitacao, TipoServico, ServicoTipo])],
  providers: [ClienteRepository, ServidoraRepository, ServicoRepository, SolicitacaoRepository],
  exports: [ClienteRepository, ServidoraRepository, ServicoRepository, TypeOrmModule, SolicitacaoRepository],
})

export class InfrastructureModule {}