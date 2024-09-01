import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from 'src/domain/entity/cliente.entity';
import { CreateClienteDto } from '../dto/create-cliente-dto';

@Injectable()
export class CreateClienteUseCase {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  async execute(createClienteDto: CreateClienteDto): Promise<Cliente> {
    // Cria uma nova instância de Cliente com os dados fornecidos
    const cliente = this.clienteRepository.create({
      ...createClienteDto,
    });

    // Salva o cliente no banco de dados
    return await this.clienteRepository.save(cliente);
  }
}
