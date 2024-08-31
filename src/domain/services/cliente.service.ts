
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from 'src/domain/entity/cliente.entity';
import { CreateClienteDto } from '../../application/cliente/dto/create-cliente-dto';
import { UpdateClienteDto } from '../../application/cliente/dto/update-cliente-dto';
import { CreateClienteUseCase } from '../../application/cliente/use-cases/create-cliente.use-case';
import { UpdateClienteUseCase } from '../../application/cliente/use-cases/update-cliente-use-case';
import { DeleteClienteUseCase } from '../../application/cliente/use-cases/delete-cliente.use-case';
import { FindAllClientesUseCase } from '../../application/cliente/use-cases/find-all-clientes.use-case';
import { FindClienteByIdUseCase } from '../../application/cliente/use-cases/find-one-cliente.use-case';
import { FindClienteByEmailUseCase } from '../../application/cliente/use-cases/find-by-email.use-case';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,

    private readonly createClienteUseCase: CreateClienteUseCase,
    private readonly updateClienteUseCase: UpdateClienteUseCase,
    private readonly deleteClienteUseCase: DeleteClienteUseCase,
    private readonly findAllClientesUseCase: FindAllClientesUseCase,
    private readonly findClienteByIdUseCase: FindClienteByIdUseCase,
    private readonly findClienteByEmailUseCase: FindClienteByEmailUseCase,
  ) {}

  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    return await this.createClienteUseCase.execute(createClienteDto);
  }

  async update(id: number, updateClienteDto: UpdateClienteDto): Promise<Cliente> {
    return await this.updateClienteUseCase.execute(id, updateClienteDto);
  }

  async delete(id: number): Promise<void> {
    return await this.deleteClienteUseCase.execute(id);
  }

  async findAll(): Promise<Cliente[]> {
    return await this.findAllClientesUseCase.execute();
  }

  async findById(id: number): Promise<Cliente> {
    return await this.findClienteByIdUseCase.execute(id);
  }

  async findByEmail(email: string): Promise<Cliente | null> {
    return await this.findClienteByEmailUseCase.execute(email);
  }
}
