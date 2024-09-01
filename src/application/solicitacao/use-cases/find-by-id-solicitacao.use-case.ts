import { Injectable, NotFoundException } from '@nestjs/common';
import { SolicitacaoRepository } from 'src/infrastructure/repository/solicitacao.repository';
import { Solicitacao } from 'src/domain/entity/solicitacao.entity';

@Injectable()
export class FindByIdSolicitacaoUseCase {
  constructor(
    private readonly solicitacaoRepository: SolicitacaoRepository,
  ) {}

  async execute(id: number): Promise<Solicitacao> {
    const solicitacao = await this.solicitacaoRepository.findById(id);
    if (!solicitacao) {
      throw new NotFoundException('Solicitação não encontrada');
    }
    return solicitacao;
  }
}
