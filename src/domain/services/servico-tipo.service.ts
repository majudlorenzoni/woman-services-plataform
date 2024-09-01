import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServicoTipo } from '../entity/servico-tipo.entity';
import { CreateServicoTipoDto } from 'src/application/servico-tipo/dto/create-servico-tipo.dto';
import { UpdateServicoTipoDto } from 'src/application/servico-tipo/dto/update-sertico-tipo.dto';

@Injectable()
export class ServicoTipoService {
  constructor(
    @InjectRepository(ServicoTipo)
    private readonly servicoTipoRepository: Repository<ServicoTipo>,
  ) {}

  async findAll(): Promise<ServicoTipo[]> {
    return await this.servicoTipoRepository.find();
  }

  async findById(id: number): Promise<ServicoTipo> {
    return await this.servicoTipoRepository.findOneBy({ servicoId: id });
  }

  async create(createServicoTipoDto: CreateServicoTipoDto): Promise<ServicoTipo> {
    const servicoTipo = this.servicoTipoRepository.create(createServicoTipoDto);
    return await this.servicoTipoRepository.save(servicoTipo);
  }

  async update(id: number, updateServicoTipoDto: UpdateServicoTipoDto): Promise<ServicoTipo> {
    await this.servicoTipoRepository.update(id, updateServicoTipoDto);
    return await this.servicoTipoRepository.findOneBy({ servicoId: id });
  }

  async delete(id: number): Promise<void> {
    await this.servicoTipoRepository.delete(id);
  }
}
