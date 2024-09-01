import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servidora } from 'src/domain/entity/servidora.entity';

@Injectable()
export class FindByEmailUseCase {
  constructor(
    @InjectRepository(Servidora)
    private readonly servidoraRepository: Repository<Servidora>,
  ) {}

  async execute(email: string): Promise<Servidora | null> {
    const servidora = await this.servidoraRepository.findOne({ where: { email } });
    if (!servidora) {
      throw new NotFoundException('Servidora não encontrada');
    }
    return servidora;
  }
}
