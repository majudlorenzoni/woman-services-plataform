import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { Cliente } from './domain/entity/cliente.entity';
import { ServicoTipo } from './domain/entity/servico-tipo.entity';
import { Servidora } from './domain/entity/servidora.entity';
import { Solicitacao } from './domain/entity/solicitacao.entity';
import { TipoServico } from './domain/entity/tipo-servico.entity';
import { Servico } from './domain/entity/servico.entity';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ClienteModule } from './domain/modules/cliente.module';
import { ServidoraModule } from './domain/modules/servidora.module';
import { ServicoModule } from './domain/modules/servico.module';
import { DomainModule } from './domain/domain.module';
import { SolicitacaoModule } from './domain/modules/solicitacoes.module';

config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Cliente, Servico, ServicoTipo, Servidora, Solicitacao, TipoServico],
      synchronize: true,
      logging: true,
    }),
    InfrastructureModule,
    DomainModule,
    ClienteModule,
    ServidoraModule,
    ServicoModule,
    SolicitacaoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
