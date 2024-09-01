import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Servidora } from 'src/domain/entity/servidora.entity';
import { ServidoraController } from 'src/application/servidora/controller/servidora.controller';
import { FindAllServidoraUseCase } from 'src/application/servidora/use-cases/find-all-servidoras.use-case';
import { FindByIdServidoraUseCase } from 'src/application/servidora/use-cases/find-by-id-servidora.use-case';
import { CreateServidoraUseCase } from 'src/application/servidora/use-cases/create-servidora.use-case';
import { UpdateServidoraUseCase } from 'src/application/servidora/use-cases/update-servidora.use-case';
import { DeleteServidoraUseCase } from 'src/application/servidora/use-cases/delete-servidora.use-case';
import { FindByEmailUseCase } from 'src/application/servidora/use-cases/find-email.use-case';
import { FindByCidadeUseCase } from 'src/application/servidora/use-cases/find-by-cidade.use-case';

@Module({
  imports: [
    TypeOrmModule.forFeature([Servidora]),
  ],
  controllers: [ServidoraController],
  providers: [
    FindAllServidoraUseCase,
    FindByIdServidoraUseCase,
    CreateServidoraUseCase,
    UpdateServidoraUseCase,
    DeleteServidoraUseCase,
    FindByEmailUseCase,
    FindByCidadeUseCase,
  ],
  exports: [
    FindAllServidoraUseCase,
    FindByIdServidoraUseCase,
    CreateServidoraUseCase,
    UpdateServidoraUseCase,
    DeleteServidoraUseCase,
    FindByEmailUseCase,
    FindByCidadeUseCase,
  ],
})
export class ServidoraModule {}
