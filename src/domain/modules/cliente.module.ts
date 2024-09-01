import { Module } from '@nestjs/common';
import { ClienteService } from '../services/cliente.service';
import { CreateClienteUseCase } from 'src/application/cliente/use-cases/create-cliente.use-case';
import { UpdateClienteUseCase } from 'src/application/cliente/use-cases/update-cliente-use-case';
import { DeleteClienteUseCase } from 'src/application/cliente/use-cases/delete-cliente.use-case';
import { FindAllClientesUseCase } from 'src/application/cliente/use-cases/find-all-clientes.use-case';
import { FindClienteByIdUseCase } from 'src/application/cliente/use-cases/find-one-cliente.use-case';
import { FindClienteByEmailUseCase } from 'src/application/cliente/use-cases/find-by-email.use-case';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { ClienteController } from 'src/application/cliente/controller/cliente.controller';

@Module({
  imports: [InfrastructureModule],
  controllers: [ClienteController],
  providers: [
    ClienteService,
    CreateClienteUseCase,
    UpdateClienteUseCase,
    DeleteClienteUseCase,
    FindAllClientesUseCase,
    FindClienteByIdUseCase,
    FindClienteByEmailUseCase,
  ],
  exports: [
    CreateClienteUseCase,
    UpdateClienteUseCase,
    DeleteClienteUseCase,
    FindAllClientesUseCase,
    FindClienteByIdUseCase,
    FindClienteByEmailUseCase,

  ],
})
export class ClienteModule {}
