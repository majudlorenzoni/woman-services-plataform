import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Solicitacao } from 'src/domain/entity/solicitacao.entity';
import { CreateSolicitacaoDto } from 'src/application/solicitacao/dto/create-solicitacao.dto';
import { UpdateSolicitacaoDto } from 'src/application/solicitacao/dto/update-solicitacao.dto';

@Injectable()
export class SolicitacaoService {
  constructor(
    @InjectRepository(Solicitacao)
    private readonly solicitacaoRepository: Repository<Solicitacao>,
  ) {}

  async findAll(): Promise<Solicitacao[]> {
    return this.solicitacaoRepository.find();
  }
  async findById(id: number): Promise<Solicitacao | null> {
    return this.solicitacaoRepository.findOneBy({ id });
  }

  async create(createSolicitacaoDto: CreateSolicitacaoDto): Promise<Solicitacao> {
    const solicitacao = this.solicitacaoRepository.create(createSolicitacaoDto);
    return this.solicitacaoRepository.save(solicitacao);
  }

  async update(id: number, updateSolicitacaoDto: UpdateSolicitacaoDto): Promise<Solicitacao> {
    await this.solicitacaoRepository.update(id, updateSolicitacaoDto);
    return this.solicitacaoRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    await this.solicitacaoRepository.delete(id);
  }

  async findByCliente(clienteId: number): Promise<Solicitacao[]> {
    return this.solicitacaoRepository.find({ where: { cliente: { id: clienteId } } });
  }

  async findByServico(servicoId: number): Promise<Solicitacao[]> {
    return this.solicitacaoRepository.find({ where: { servico: { id: servicoId } } });
  }
}
