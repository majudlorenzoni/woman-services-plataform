import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Solicitacao } from 'src/domain/entity/solicitacao.entity';
import { ISolicitacaoRepository } from 'src/domain/interfaces/solicitacao.repository.interface';

@Injectable()
export class SolicitacaoRepository implements ISolicitacaoRepository {
  constructor(
    @InjectRepository(Solicitacao)
    private readonly repository: Repository<Solicitacao>,
  ) {}

  async findAll(): Promise<Solicitacao[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<Solicitacao | null> {
    return this.repository.findOneBy({ id });
  }

  async create(solicitacao: Solicitacao): Promise<Solicitacao> {
    return this.repository.save(solicitacao);
  }

  async update(solicitacao: Solicitacao): Promise<Solicitacao> {
    await this.repository.save(solicitacao);
    return this.repository.findOneBy({ id: solicitacao.id });
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async findByCliente(clienteId: number): Promise<Solicitacao[]> {
    return this.repository.find({ where: { cliente: { id: clienteId } } });
  }

  async findByServico(servicoId: number): Promise<Solicitacao[]> {
    return this.repository.find({ where: { servico: { id: servicoId } } });
  }
}