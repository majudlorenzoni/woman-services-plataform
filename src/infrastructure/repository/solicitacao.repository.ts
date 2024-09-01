import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Solicitacao } from 'src/domain/entity/solicitacao.entity';
import { ISolicitacaoRepository } from 'src/domain/interfaces/solicitacao.repository.interface';

@Injectable()
export class SolicitacaoRepository implements ISolicitacaoRepository {
  constructor(
    @InjectRepository(Solicitacao)
    private readonly solicitacaoRepository: Repository<Solicitacao>,
  ) {}

  async findAll(): Promise<Solicitacao[]> {
    return await this.solicitacaoRepository.find();
  }

  async findById(id: number): Promise<Solicitacao> {
    return await this.solicitacaoRepository.findOne({ where: { id } });
  }

  async create(solicitacao: Solicitacao): Promise<Solicitacao> {
    return await this.solicitacaoRepository.save(solicitacao);
  }

  async delete(id: number): Promise<void> {
    await this.solicitacaoRepository.delete(id);
  }

  async findByCliente(clienteId: number): Promise<Solicitacao[]> {
    return await this.solicitacaoRepository.find({ where: { cliente: { id: clienteId } } });
  }

  async findByServico(servicoId: number): Promise<Solicitacao[]> {
    return await this.solicitacaoRepository.find({ where: { servico: { id: servicoId } } });
  }

  async update(solicitacao: Solicitacao): Promise<Solicitacao> {
    await this.solicitacaoRepository.update(solicitacao.id, solicitacao);
    return this.findById(solicitacao.id);
  }
}
