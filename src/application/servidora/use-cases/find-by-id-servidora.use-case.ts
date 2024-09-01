import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servidora } from 'src/domain/entity/servidora.entity';

@Injectable()
export class FindByIdServidoraUseCase {
  constructor(
    @InjectRepository(Servidora)
    private readonly servidoraRepository: Repository<Servidora>,
  ) {}

  async execute(id: number): Promise<Servidora> {
    const servidora = await this.servidoraRepository.findOne({ where: { id } });
    if (!servidora) {
      throw new NotFoundException('Servidora não encontrada');
    }
    return servidora;
  }
}
