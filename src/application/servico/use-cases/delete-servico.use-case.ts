import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servico } from 'src/domain/entity/servico.entity';

@Injectable()
export class DeleteServicoUseCase {
  constructor(
    @InjectRepository(Servico)
    private readonly servicoRepository: Repository<Servico>,
  ) {}

  async execute(id: number): Promise<void> {
    const servico = await this.servicoRepository.findOne({ where: { id } });
    if (!servico) {
      throw new NotFoundException('Serviço não encontrado');
    }
    await this.servicoRepository.delete(id);
  }
}
