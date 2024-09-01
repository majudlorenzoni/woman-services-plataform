import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servico } from 'src/domain/entity/servico.entity';
import { ServicoTipo } from 'src/domain/entity/servico-tipo.entity';
import { ServicoTipoRepository } from 'src/infrastructure/repository/servico-tipo.repository';

@Injectable()
export class FindByTipoServicoUseCase {
  constructor(
    @InjectRepository(Servico)
    private readonly servicoRepository: Repository<Servico>,
    @InjectRepository(ServicoTipo)
    private readonly servicoTipoRepository: Repository<ServicoTipo>,
  ) {}

  async execute(tipoId: number): Promise<Servico[]> {
    const tipo = await this.servicoTipoRepository.findOne({ where: { tipoId } });
    if (!tipo) {
      throw new NotFoundException('Tipo de serviço não encontrado');
    }
    return await this.servicoRepository
      .createQueryBuilder('servico')
      .leftJoinAndSelect('servico.servicoTipos', 'servicoTipo')
      .where('servicoTipo.id = :tipoId', { tipoId })
      .getMany();
  }
}
