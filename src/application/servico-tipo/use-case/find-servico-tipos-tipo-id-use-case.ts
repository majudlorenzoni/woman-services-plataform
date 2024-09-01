import { Injectable } from '@nestjs/common';
import { ServicoTipoRepository } from 'src/infrastructure/repository/servico-tipo.repository';
import { ServicoTipo } from 'src/domain/entity/servico-tipo.entity';

@Injectable()
export class FindServicoTiposByTipoIdUseCase {
  constructor(private readonly servicoTipoRepository: ServicoTipoRepository) {}

  async execute(tipoId: number): Promise<ServicoTipo[]> {
    return this.servicoTipoRepository.findByTipo(tipoId);
  }
}
