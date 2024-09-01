import { Injectable } from '@nestjs/common';
import { ServicoTipoRepository } from 'src/infrastructure/repository/servico-tipo.repository';
import { ServicoTipo } from 'src/domain/entity/servico-tipo.entity';
@Injectable()
export class CreateServicoTipoUseCase {
  constructor(private readonly servicoTipoRepository: ServicoTipoRepository) {}

  async execute(servicoTipo: ServicoTipo): Promise<ServicoTipo> {
    return this.servicoTipoRepository.create(servicoTipo);
  }
}
