import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Servico } from 'src/domain/entity/servico.entity';
import { ServicoController } from 'src/application/servico/controller/servico.controller';
import { ServicoService } from '../services/servico.service';
import { CreateServicoUseCase } from 'src/application/servico/use-cases/create-servico.use-case';
import { UpdateServicoUseCase } from 'src/application/servico/use-cases/update-servico.use-case';
import { DeleteServicoUseCase } from 'src/application/servico/use-cases/delete-servico.use-case';
import { FindAllServicosUseCase } from 'src/application/servico/use-cases/find-all-servico.use-case';
import { FindByIdServicoUseCase } from 'src/application/servico/use-cases/find-by-id-servico.use-case';
import { FindByTipoServicoUseCase } from 'src/application/servico/use-cases/find-by-tipo.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([Servico])],
  controllers: [ServicoController],
  providers: [
    ServicoService,
    CreateServicoUseCase,
    UpdateServicoUseCase,
    DeleteServicoUseCase,
    FindAllServicosUseCase,
    FindByIdServicoUseCase,
    FindByTipoServicoUseCase,
  ],
  exports: [ServicoService, CreateServicoUseCase, UpdateServicoUseCase, DeleteServicoUseCase, FindAllServicosUseCase, FindByIdServicoUseCase, FindByTipoServicoUseCase],
})
export class ServicoModule {}
