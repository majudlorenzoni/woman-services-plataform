import { Solicitacao } from '../entity/solicitacao.entity';

export interface ISolicitacaoRepository {
  findAll(): Promise<Solicitacao[]>;
  findById(id: number): Promise<Solicitacao | null>;
  create(solicitacao: Solicitacao): Promise<Solicitacao>;
  update(solicitacao: Solicitacao): Promise<Solicitacao>;
  delete(id: number): Promise<void>;
  findByCliente(clienteId: number): Promise<Solicitacao[]>;
  findByServico(servicoId: number): Promise<Solicitacao[]>;
}
