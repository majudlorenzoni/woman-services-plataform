import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servico } from 'src/domain/entity/servico.entity';

@Injectable()
export class UpdateServicoUseCase {
  constructor(
    @InjectRepository(Servico)
    private readonly servicoRepository: Repository<Servico>,
  ) {}

  async execute(servico: Servico): Promise<Servico> {
    const existingServico = await this.servicoRepository.findOne({ where: { id: servico.id } });
    if (!existingServico) {
      throw new NotFoundException('Serviço não encontrado');
    }

    const updatedServico = Object.assign(existingServico, servico);
    return await this.servicoRepository.save(updatedServico);
  }
}
