import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servidora } from 'src/domain/entity/servidora.entity';

@Injectable()
export class FindByCidadeUseCase {
  constructor(
    @InjectRepository(Servidora)
    private readonly servidoraRepository: Repository<Servidora>,
  ) {}

  async execute(cidade: string): Promise<Servidora[]> {
    const servidoras = await this.servidoraRepository.find({ where: { cidade } });
    if (servidoras.length === 0) {
      throw new NotFoundException('Nenhuma servidora encontrada na cidade especificada');
    }
    return servidoras;
  }
}
