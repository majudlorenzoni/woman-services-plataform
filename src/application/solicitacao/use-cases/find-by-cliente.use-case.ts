import { Injectable } from '@nestjs/common';
import { SolicitacaoRepository } from 'src/infrastructure/repository/solicitacao.repository';
import { Solicitacao } from 'src/domain/entity/solicitacao.entity';

@Injectable()
export class FindByClienteUseCase {
  constructor(
    private readonly solicitacaoRepository: SolicitacaoRepository,
  ) {}

  async execute(clienteId: number): Promise<Solicitacao[]> {
    return this.solicitacaoRepository.findByCliente(clienteId);
  }
}
