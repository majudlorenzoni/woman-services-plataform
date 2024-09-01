import { Injectable } from '@nestjs/common';
import { FindAllServicosUseCase } from 'src/application/servico/use-cases/find-all-servico.use-case';
import { CreateServicoUseCase } from 'src/application/servico/use-cases/create-servico.use-case';
import { UpdateServicoUseCase } from 'src/application/servico/use-cases/update-servico.use-case';
import { DeleteServicoUseCase } from 'src/application/servico/use-cases/delete-servico.use-case';
import { FindByIdServicoUseCase } from 'src/application/servico/use-cases/find-by-id-servico.use-case';
import { Servico } from 'src/domain/entity/servico.entity';

@Injectable()
export class ServicoService {
  constructor(
    private readonly createServicoUseCase: CreateServicoUseCase,
    private readonly updateServicoUseCase: UpdateServicoUseCase,
    private readonly deleteServicoUseCase: DeleteServicoUseCase,
    private readonly findByIdServicoUseCase: FindByIdServicoUseCase,
    private readonly findAllServicosUseCase: FindAllServicosUseCase,
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

}
