import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from 'src/domain/entity/cliente.entity';
import { CreateClienteDto } from '../dto/create-cliente-dto';
import { Endereco } from 'src/domain/entity/endereco.entity'; // Importe a entidade Endereco
import { IEnderecoRepository } from 'src/domain/interfaces/enderecos.repository'; // Importe a interface do repositório de Endereco

@Injectable()
export class CreateClienteUseCase {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
    @InjectRepository(Endereco)
    private readonly enderecoRepository: IEnderecoRepository, // Injete o repositório de Endereco
  ) {}

  async execute(createClienteDto: CreateClienteDto): Promise<Cliente> {
    const endereco = new Endereco();
    endereco.rua = createClienteDto.endereco.rua;
    endereco.numero = createClienteDto.endereco.numero;
    endereco.complemento = createClienteDto.endereco.complemento;
    endereco.cep = createClienteDto.endereco.cep;
    endereco.cidade = createClienteDto.endereco.cidade;
    endereco.estado = createClienteDto.endereco.estado;

    const savedEndereco = await this.enderecoRepository.save(endereco);

    const cliente = this.clienteRepository.create({
      ...createClienteDto,
      endereco: savedEndereco,
    });

    return await this.clienteRepository.save(cliente);
  }
}
