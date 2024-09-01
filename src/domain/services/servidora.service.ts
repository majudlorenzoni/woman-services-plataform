import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servidora } from 'src/domain/entity/servidora.entity';

@Injectable()
export class ServidoraService {
  constructor(
    @InjectRepository(Servidora)
    private readonly servidoraRepository: Repository<Servidora>,
  ) {}

  async findAll(): Promise<Servidora[]> {
    return await this.servidoraRepository.find();
  }

  async findById(id: number): Promise<Servidora | null> {
    return await this.servidoraRepository.findOne({ where: { id } });
  }

  async create(servidora: Servidora): Promise<Servidora> {
    const newServidora = this.servidoraRepository.create(servidora);
    return await this.servidoraRepository.save(newServidora);
  }

  async update(servidora: Servidora): Promise<Servidora> {
    const existingServidora = await this.servidoraRepository.findOne({ where: { id: servidora.id } });
    if (!existingServidora) {
      throw new NotFoundException('Servidora não encontrada');
    }
    const updatedServidora = this.servidoraRepository.merge(existingServidora, servidora);
    return await this.servidoraRepository.save(updatedServidora);
  }

  async delete(id: number): Promise<void> {
    const result = await this.servidoraRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Servidora não encontrada');
    }
  }

  async findByEmail(email: string): Promise<Servidora | null> {
    return await this.servidoraRepository.findOne({ where: { email } });
  }

  async findByCidade(cidade: string): Promise<Servidora[]> {
    return await this.servidoraRepository.find({ where: { cidade } });
  }
}
