import { Injectable } from '@nestjs/common';
import { ServicoTipoRepository } from 'src/infrastructure/repository/servico-tipo.repository';
import { ServicoTipo } from 'src/domain/entity/servico-tipo.entity';

@Injectable()
export class FindServicoTiposByServicoIdUseCase {
  constructor(private readonly servicoTipoRepository: ServicoTipoRepository) {}

  async execute(servicoId: number): Promise<ServicoTipo[]> {
    return this.servicoTipoRepository.findByServicoId(servicoId);
  }
}
