import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servico } from 'src/domain/entity/servico.entity';

@Injectable()
export class FindAllServicosUseCase {
  constructor(
    @InjectRepository(Servico)
    private readonly servicoRepository: Repository<Servico>,
  ) {}

  async execute(): Promise<Servico[]> {
    return await this.servicoRepository.find();
  }
}
