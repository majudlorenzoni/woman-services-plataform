import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServicoTipo } from 'src/domain/entity/servico-tipo.entity';

@Injectable()
export class ServicoTipoRepository {
  constructor(
    @InjectRepository(ServicoTipo)
    private readonly servicoTipoRepository: Repository<ServicoTipo>,
  ) {}

  async findAll(): Promise<ServicoTipo[]> {
    return this.servicoTipoRepository.find();
  }

  async findByServicoId(servicoId: number): Promise<ServicoTipo[]> {
    return this.servicoTipoRepository.find({
      where: { servicoId },
      relations: ['tipoServico'], 
    });
  }

  async findByTipoId(tipoId: number): Promise<ServicoTipo[]> {
    return this.servicoTipoRepository.find({
      where: { tipoId },
      relations: ['servico'], 
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
}
