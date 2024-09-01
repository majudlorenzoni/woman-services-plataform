import { Injectable, NotFoundException } from '@nestjs/common';
import { SolicitacaoRepository } from 'src/infrastructure/repository/solicitacao.repository';

@Injectable()
export class DeleteSolicitacaoUseCase {
  constructor(
    private readonly solicitacaoRepository: SolicitacaoRepository,
  ) {}

  async execute(id: number): Promise<void> {
    const existingSolicitacao = await this.solicitacaoRepository.findById(id);
    if (!existingSolicitacao) {
      throw new NotFoundException('Solicitação não encontrada');
    }
    return this.solicitacaoRepository.delete(id);
  }
}
