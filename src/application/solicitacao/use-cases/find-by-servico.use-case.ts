import { Injectable } from '@nestjs/common';
import { SolicitacaoRepository } from 'src/infrastructure/repository/solicitacao.repository';
import { Solicitacao } from 'src/domain/entity/solicitacao.entity';

@Injectable()
export class FindByServicoUseCase {
  constructor(
    private readonly solicitacaoRepository: SolicitacaoRepository,
  ) {}

  async execute(servicoId: number): Promise<Solicitacao[]> {
    return this.solicitacaoRepository.findByServico(servicoId);
  }
}
