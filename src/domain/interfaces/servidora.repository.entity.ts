import { Servidora } from '../entity/servidora.entity';

export interface IServidoraRepository {
  findAll(): Promise<Servidora[]>;
  findById(id: number): Promise<Servidora | null>;
  create(servidora: Servidora): Promise<Servidora>;
  update(servidora: Servidora): Promise<Servidora>;
  delete(id: number): Promise<void>;
  findByEmail(email: string): Promise<Servidora | null>;
  findByCidade(cidade: string): Promise<Servidora[]>;
}
