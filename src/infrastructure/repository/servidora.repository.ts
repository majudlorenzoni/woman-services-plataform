import { Repository} from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Servidora } from "src/domain/entity/servidora.entity";
import { IServicoRepository } from "src/domain/interfaces/servico.repository.interface";
import { IServidoraRepository } from "src/domain/interfaces/servidora.repository.entity";

export class ServidoraRepository implements IServidoraRepository {
  constructor(
    @InjectRepository(Servidora)
    private readonly servidoraRepository: Repository<Servidora>,
  ) {}


  async findAll(): Promise<Servidora[]> {
    return await this.servidoraRepository.find();
  }

  async findById(id: number): Promise<Servidora> {
    return await this.servidoraRepository.findOne({
      where: { id },
    });
  }

  async create(servidora: Servidora): Promise<Servidora> {
    return await this.servidoraRepository.save(servidora);
  }

  async update(servidora: Servidora): Promise<Servidora> {
    return await this.servidoraRepository.save(servidora);
  }

  async delete(id: number): Promise<void> {
    await this.servidoraRepository.delete(id);
  }

  async findByEmail(email: string): Promise<Servidora | null> {
    return await this.servidoraRepository.findOne({
      where: { email },
    });
  }

  async findByCidade(cidade: string): Promise<Servidora[]> {
    return await this.servidoraRepository.find({
      where: { cidade },
    });
  }
}