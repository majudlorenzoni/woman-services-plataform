import { TipoServico } from '../entity/tipo-servico.entity';

export interface ITipoServicoRepository {
  findAll(): Promise<TipoServico[]>;
  findById(id: number): Promise<TipoServico | null>;
  create(tipoServico: TipoServico): Promise<TipoServico>;
  update(tipoServico: TipoServico): Promise<TipoServico>;
  delete(id: number): Promise<void>;
  findByNome(nome: string): Promise<TipoServico | null>;
}
