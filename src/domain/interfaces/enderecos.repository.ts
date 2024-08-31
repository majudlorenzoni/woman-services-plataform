import { Endereco } from '../entity/endereco.entity';

export interface IEnderecoRepository {
  save(endereco: Endereco): Promise<Endereco>;
  findById(id: number): Promise<Endereco | null>;
  delete(id: number): Promise<void>;
}
