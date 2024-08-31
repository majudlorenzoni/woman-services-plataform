import { Cliente } from '../entity/cliente.entity';

export interface IClienteRepository {
  findAll(): Promise<Cliente[]>;
  findOne(id: number): Promise<Cliente | null>;
  create(cliente: Cliente): Promise<Cliente>;
  update(cliente: Cliente): Promise<Cliente>;
  delete(id: number): Promise<void>;
  findByEmail(email: string): Promise<Cliente | null>;
}
