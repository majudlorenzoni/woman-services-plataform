import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servidora } from 'src/domain/entity/servidora.entity';

@Injectable()
export class FindAllServidoraUseCase {
  constructor(
    @InjectRepository(Servidora)
    private readonly servidoraRepository: Repository<Servidora>,
  ) {}

  async execute(): Promise<Servidora[]> {
    return await this.servidoraRepository.find();
  }
}
