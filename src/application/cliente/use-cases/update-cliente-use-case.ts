import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from 'src/domain/entity/cliente.entity';
import { UpdateClienteDto } from '../dto/update-cliente-dto';

@Injectable()
export class UpdateClienteUseCase {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  async execute(id: number, updateClienteDto: UpdateClienteDto): Promise<Cliente> {
    // Encontra o cliente pelo ID
    const cliente = await this.clienteRepository.findOne({ where: { id } });
    if (!cliente) {
      throw new NotFoundException('Cliente não encontrado');
    }

    if (updateClienteDto.nome !== undefined) {
      cliente.nome = updateClienteDto.nome;
    }
    if (updateClienteDto.email !== undefined) {
      cliente.email = updateClienteDto.email;
    }
    if (updateClienteDto.telefone !== undefined) {
      cliente.telefone = updateClienteDto.telefone;
    }
    if (updateClienteDto.rua !== undefined) {
      cliente.rua = updateClienteDto.rua;
    }
    if (updateClienteDto.numero !== undefined) {
      cliente.numero = updateClienteDto.numero;
    }
    if (updateClienteDto.complemento !== undefined) {
      cliente.complemento = updateClienteDto.complemento;
    }
    if (updateClienteDto.cep !== undefined) {
      cliente.cep = updateClienteDto.cep;
    }
    if (updateClienteDto.cidade !== undefined) {
      cliente.cidade = updateClienteDto.cidade;
    }
    if (updateClienteDto.estado !== undefined) {
      cliente.estado = updateClienteDto.estado;
    }

    return this.clienteRepository.save(cliente);
  }
}
