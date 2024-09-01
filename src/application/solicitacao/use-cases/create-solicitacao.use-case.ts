import { Injectable } from '@nestjs/common';
import { SolicitacaoRepository } from 'src/infrastructure/repository/solicitacao.repository';
import { Solicitacao } from 'src/domain/entity/solicitacao.entity';
import { CreateSolicitacaoDto } from '../dto/create-solicitacao.dto';

@Injectable()
export class CreateSolicitacaoUseCase {
  constructor(
    private readonly solicitacaoRepository: SolicitacaoRepository,
  ) {}

  async execute(createSolicitacaoDto: CreateSolicitacaoDto): Promise<Solicitacao> {
    const solicitacao = new Solicitacao();
    solicitacao.cliente = { id: createSolicitacaoDto.clienteId } as any; // Aqui você pode usar um método para buscar o cliente real
    solicitacao.servico = { id: createSolicitacaoDto.servicoId } as any; // Aqui você pode usar um método para buscar o serviço real
    solicitacao.localizacao = createSolicitacaoDto.localizacao;
    solicitacao.disponibilidade = createSolicitacaoDto.disponibilidade;
    solicitacao.descricao = createSolicitacaoDto.descricao;

    return this.solicitacaoRepository.create(solicitacao); // Cria e salva a solicitação
  }

}