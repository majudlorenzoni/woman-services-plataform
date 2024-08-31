/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from 'src/domain/entity/cliente.entity';
import { UpdateClienteDto } from '../dto/update-cliente-dto';
import { Endereco } from 'src/domain/entity/endereco.entity';
import { IEnderecoRepository } from 'src/domain/interfaces/enderecos.repository';

@Injectable()
export class UpdateClienteUseCase {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
    @InjectRepository(Endereco)
    private readonly enderecoRepository: IEnderecoRepository, // Injete o repositório de Endereco
  ) {}

  async execute(id: number, updateClienteDto: UpdateClienteDto): Promise<Cliente> {
    const cliente = await this.clienteRepository.findOne({ where: { id } });
    if (!cliente) {
      throw new NotFoundException(`Cliente with ID ${id} not found`);
    }

    if (updateClienteDto.endereco) {
      let endereco = cliente.endereco;
      if (!endereco) {
        endereco = new Endereco();
      }

      endereco.rua = updateClienteDto.endereco.rua ?? endereco.rua;
      endereco.numero = updateClienteDto.endereco.numero ?? endereco.numero;
      endereco.complemento = updateClienteDto.endereco.complemento ?? endereco.complemento;
      endereco.cep = updateClienteDto.endereco.cep ?? endereco.cep;
      endereco.cidade = updateClienteDto.endereco.cidade ?? endereco.cidade;
      endereco.estado = updateClienteDto.endereco.estado ?? endereco.estado;

      await this.enderecoRepository.save(endereco); // Salve ou atualize o endereço
      cliente.endereco = endereco; // Associe o endereço ao cliente
    }

    cliente.nome = updateClienteDto.nome ?? cliente.nome;
    cliente.email = updateClienteDto.email ?? cliente.email;
    cliente.telefone = updateClienteDto.telefone ?? cliente.telefone;
    cliente.solicitacoes = updateClienteDto.solicitacoes ?? cliente.solicitacoes;
    cliente.dataCriacao = updateClienteDto.dataCriacao ?? cliente.dataCriacao;

    return await this.clienteRepository.save(cliente); // Salve ou atualize o cliente
  }
}