import { Injectable } from '@nestjs/common';
import { ServicoTipoRepository } from 'src/infrastructure/repository/servico-tipo.repository';
import { ServicoTipo } from 'src/domain/entity/servico-tipo.entity';

@Injectable()
export class FindAllServicoTiposUseCase {
  constructor(private readonly servicoTipoRepository: ServicoTipoRepository) {}

  async execute(): Promise<ServicoTipo[]> {
    return this.servicoTipoRepository.findAll();
  }
}
