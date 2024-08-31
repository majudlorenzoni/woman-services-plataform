import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cliente } from "./domain/entity/cliente.entity";
import { Servico } from "./domain/entity/servico.entity";
import { Servidora } from "./domain/entity/servidora.entity";
import { ServicoTipo } from "./domain/entity/servico-tipo.entity";
import { TipoServico } from "./domain/entity/tipo-servico.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'woman-services',
      username: 'reprograma8',
      password: 'repro',
      entities: [Cliente, Servico, Servidora, ServicoTipo, TipoServico],
      synchronize: true,
    }),
  ],
})

export class AppModule {}
