import { Injectable } from '@nestjs/common';
import { FindAllServicosUseCase } from 'src/application/servico/use-cases/find-all-servico.use-case';
import { CreateServicoUseCase } from 'src/application/servico/use-cases/create-servico.use-case';
import { UpdateServicoUseCase } from 'src/application/servico/use-cases/update-servico.use-case';
import { DeleteServicoUseCase } from 'src/application/servico/use-cases/delete-servico.use-case';
import { FindByTipoServicoUseCase } from 'src/application/servico/use-cases/find-by-tipo.use-case';
import { FindByIdServicoUseCase } from 'src/application/servico/use-cases/find-by-id-servico.use-case';
import { Servico } from 'src/domain/entity/servico.entity';

@Injectable()
export class ServicoService {
  constructor(
    private readonly findAllServicosUseCase: FindAllServicosUseCase,
    private readonly createServicoUseCase: CreateServicoUseCase,
    private readonly updateServicoUseCase: UpdateServicoUseCase,
    private readonly deleteServicoUseCase: DeleteServicoUseCase,
    private readonly findByTipoServicoUseCase: FindByTipoServicoUseCase,
    private readonly findByIdServicoUseCase: FindByIdServicoUseCase,
  ) {}

  async findAll(): Promise<Servico[]> {
    return await this.findAllServicosUseCase.execute();
  }

  async create(servico: Servico): Promise<Servico> {
    return await this.createServicoUseCase.execute(servico);
  }

  async update(servico: Servico): Promise<Servico> {
    return await this.updateServicoUseCase.execute(servico);
  }

  async delete(id: number): Promise<void> {
    return await this.deleteServicoUseCase.execute(id);
  }

  async findById(id: number): Promise<Servico> { // Corrigido
    return await this.findByIdServicoUseCase.execute(id);
  }

  async findByTipo(tipoId: number): Promise<Servico[]> {
    return await this.findByTipoServicoUseCase.execute(tipoId);
  }
}
