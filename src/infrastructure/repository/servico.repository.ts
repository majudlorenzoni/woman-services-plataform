
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Servico } from "src/domain/entity/servico.entity";
import { IServicoRepository } from "src/domain/interfaces/servico.repository.interface";

@Injectable()
export class ServicoRepository implements IServicoRepository {
  constructor(
    @InjectRepository(Servico)
    private readonly servicoRepository: Repository<Servico>,
  ) {}

  async findAll(): Promise<Servico[]> {
    return await this.servicoRepository.find();
  }

  async findById(id: number): Promise<Servico> {
    return await this.servicoRepository.findOne({
      where: { id },
    });
  }

  async create(servico: Servico): Promise<Servico> {
    return await this.servicoRepository.save(servico);
  }

  async update(servico: Servico): Promise<Servico> {
    return await this.servicoRepository.save(servico);
  }

  async delete(id: number): Promise<void> {
    await this.servicoRepository.delete(id);
  }

  async findByTipo(tipoId: number): Promise<Servico[]> {
    return await this.servicoRepository.find({
      where: { id: tipoId },
    });
  }
}