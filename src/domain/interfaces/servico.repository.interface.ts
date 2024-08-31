import { Servico } from '../entity/servico.entity';

export interface IServicoRepository {
  findAll(): Promise<Servico[]>;
  findById(id: number): Promise<Servico | null>;
  create(servico: Servico): Promise<Servico>;
  update(servico: Servico): Promise<Servico>;
  delete(id: number): Promise<void>;
  findByTipo(tipoId: number): Promise<Servico[]>;
}
