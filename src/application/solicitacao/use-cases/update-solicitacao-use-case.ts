import { Injectable, NotFoundException } from '@nestjs/common';
import { SolicitacaoRepository } from 'src/infrastructure/repository/solicitacao.repository';
import { Solicitacao } from 'src/domain/entity/solicitacao.entity';

@Injectable()
export class UpdateSolicitacaoUseCase {
  constructor(
    private readonly solicitacaoRepository: SolicitacaoRepository,
  ) {}

  async execute(solicitacao: Solicitacao): Promise<Solicitacao> {
    const existingSolicitacao = await this.solicitacaoRepository.findById(solicitacao.id);
    if (!existingSolicitacao) {
      throw new NotFoundException('Solicitação não encontrada');
    }
    return this.solicitacaoRepository.update(solicitacao);
  }
}
