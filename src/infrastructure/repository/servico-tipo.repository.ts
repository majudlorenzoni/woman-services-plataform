import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServicoTipo } from 'src/domain/entity/servico-tipo.entity';
import { IServicoTipoRepository } from 'src/domain/interfaces/servico-tipo.interface.repository';

@Injectable()
export class ServicoTipoRepository implements IServicoTipoRepository {
  constructor(
    @InjectRepository(ServicoTipo)
    private readonly servicoTipoRepository: Repository<ServicoTipo>,
  ) {}

  async findAll(): Promise<ServicoTipo[]> {
    return this.servicoTipoRepository.find();
  }

  async findById(servicoId: number): Promise<ServicoTipo | null> {
    return this.servicoTipoRepository.findOne({
      where: { servicoId },
    });
  }

  async create(servicoTipo: ServicoTipo): Promise<ServicoTipo> {
    return this.servicoTipoRepository.save(servicoTipo);
  }

  async update(servicoTipo: ServicoTipo): Promise<ServicoTipo> {
    return this.servicoTipoRepository.save(servicoTipo);
  }
  
  async delete(servicoId: number, tipoId: number): Promise<void> {
    await this.servicoTipoRepository.delete({ servicoId, tipoId });
  }

  async findByTipo(tipoId: number): Promise<ServicoTipo[]> {
    return this.servicoTipoRepository.find({
      where: { tipoId },
      relations: ['servico'], 
    });
  }
}
