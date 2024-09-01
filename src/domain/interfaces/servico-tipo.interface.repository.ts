import { ServicoTipo } from '../entity/servico-tipo.entity';

export interface IServicoTipoRepository {
  findAll(): Promise<ServicoTipo[]>;
  findById(id: number): Promise<ServicoTipo | null>;
  create(servicoTipo: ServicoTipo): Promise<ServicoTipo>;
  update(servicoTipo: ServicoTipo): Promise<ServicoTipo>;
  delete(servicoId: number, tipoId: number): Promise<void>;
  findByTipo(tipoId: number): Promise<ServicoTipo[]>;
}
