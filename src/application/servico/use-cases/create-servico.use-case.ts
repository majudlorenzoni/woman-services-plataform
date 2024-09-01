import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servico } from 'src/domain/entity/servico.entity';

@Injectable()
export class CreateServicoUseCase {
  constructor(
    @InjectRepository(Servico)
    private readonly servicoRepository: Repository<Servico>,
  ) {}

  async execute(servico: Servico): Promise<Servico> {
    const newServico = this.servicoRepository.create(servico);
    return await this.servicoRepository.save(newServico);
  }
}
