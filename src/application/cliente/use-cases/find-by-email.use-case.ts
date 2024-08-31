import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from 'src/domain/entity/cliente.entity';

@Injectable()
export class FindClienteByEmailUseCase {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  async execute(email: string): Promise<Cliente | null> {
    const cliente = await this.clienteRepository.findOne({
      where: { email },
    });

    return cliente || null;  
  }
}
