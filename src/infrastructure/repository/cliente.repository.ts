import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Cliente } from "src/domain/entity/cliente.entity";
import { IClienteRepository } from "src/domain/interfaces/cliente.repository.interface";

export class ClienteRepository implements IClienteRepository {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  async findAll(): Promise<Cliente[]> {
    return await this.clienteRepository.find();
  }

  async findOne(id: number): Promise<Cliente> {
    return await this.clienteRepository.findOne({
      where: { id },
    });
  }

  async create(cliente: Cliente): Promise<Cliente> {
    return await this.clienteRepository.save(cliente);
  }

  async update(cliente: Cliente): Promise<Cliente> {
    return await this.clienteRepository.save(cliente);
  }

  async delete(id: number): Promise<void> {
    await this.clienteRepository.delete(id);
  }

  async findByEmail(email: string): Promise<Cliente | null> {
    return await this.clienteRepository.findOne({
      where: { email },
    });
  }

}