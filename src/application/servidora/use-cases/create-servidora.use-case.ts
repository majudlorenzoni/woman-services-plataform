import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servidora } from 'src/domain/entity/servidora.entity';
import { CreateServidoraDto } from '../dto/create-servidora.dto';

@Injectable()
export class CreateServidoraUseCase {
  constructor(
    @InjectRepository(Servidora)
    private readonly servidoraRepository: Repository<Servidora>,
  ) {}

  async execute(createServidoraDto: CreateServidoraDto): Promise<Servidora> {
    const servidora = this.servidoraRepository.create(createServidoraDto);
    return await this.servidoraRepository.save(servidora);
  }
}
