import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from 'src/domain/entity/cliente.entity';
import { Endereco } from 'src/domain/entity/endereco.entity';
import { IEnderecoRepository } from 'src/domain/interfaces/enderecos.repository';

@Injectable()
export class DeleteClienteUseCase {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
    @InjectRepository(Endereco)
    private readonly enderecoRepository: IEnderecoRepository,
  ) {}

  async execute(clienteId: number): Promise<void> {
    const cliente = await this.clienteRepository.findOne({
      where: { id: clienteId },
      relations: ['endereco'],
    });

    if (!cliente) {
      throw new NotFoundException(`Cliente com ID ${clienteId} não encontrado`);
    }

    if (cliente.endereco) {
      await this.enderecoRepository.delete(cliente.endereco.id);
    }

    await this.clienteRepository.delete(clienteId);
  }
}
