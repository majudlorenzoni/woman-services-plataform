import { Injectable } from '@nestjs/common';
import { ServicoTipoRepository } from 'src/infrastructure/repository/servico-tipo.repository';
import { ServicoTipo } from 'src/domain/entity/servico-tipo.entity';

@Injectable()
export class UpdateServicoTipoUseCase {
  constructor(private readonly servicoTipoRepository: ServicoTipoRepository) {}

  async execute(servicoTipo: ServicoTipo): Promise<ServicoTipo> {
    return this.servicoTipoRepository.update(servicoTipo);
  }
}