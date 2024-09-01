import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from '../domain/entity/cliente.entity';
import { Servico } from './entity/servico.entity';
import { Servidora } from './entity/servidora.entity';
import { Solicitacao } from './entity/solicitacao.entity';
import { ClienteModule } from './modules/cliente.module';
import { ServicoModule } from './modules/servico.module';
import { ServidoraModule } from './modules/servidora.module';
import { SolicitacaoModule } from './modules/solicitacoes.module';
import { ClienteService } from './services/cliente.service';
import { ServicoService } from './services/servico.service';
import { ServidoraService } from './services/servidora.service';
import { SolicitacaoService } from './services/solicitacao.service';

import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
@Module({
  imports: [
    InfrastructureModule,
    TypeOrmModule.forFeature([Cliente, Servico, Servidora, Solicitacao]),
    ClienteModule,
    ServicoModule,
    ServidoraModule,
    SolicitacaoModule,
  ],
  providers: [ClienteService, ServicoService, ServidoraService, SolicitacaoService],
  exports: [ClienteService, ServicoService, ServidoraService, SolicitacaoService],
})
export class DomainModule {}