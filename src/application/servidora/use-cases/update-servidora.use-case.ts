import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servidora } from 'src/domain/entity/servidora.entity';
import { UpdateServidoraDto } from '../dto/update-servidora.dto';

@Injectable()
export class UpdateServidoraUseCase {
  constructor(
    @InjectRepository(Servidora)
    private readonly servidoraRepository: Repository<Servidora>,
  ) {}

  async execute(id: number, updateServidoraDto: UpdateServidoraDto): Promise<Servidora> {
    const servidora = await this.servidoraRepository.findOne({ where: { id } });
    if (!servidora) {
      throw new NotFoundException('Servidora não encontrada');
    }

    Object.assign(servidora, updateServidoraDto);
    return await this.servidoraRepository.save(servidora);
  }
}
