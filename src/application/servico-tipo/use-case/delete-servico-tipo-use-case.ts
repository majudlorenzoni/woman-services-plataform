import { Injectable } from '@nestjs/common';
import { ServicoTipoRepository } from 'src/infrastructure/repository/servico-tipo.repository';

@Injectable()
export class DeleteServicoTipoUseCase {
  constructor(private readonly servicoTipoRepository: ServicoTipoRepository) {}

  async execute(servicoId: number, tipoId: number): Promise<void> {
    return this.servicoTipoRepository.delete(servicoId, tipoId);
  }
}
