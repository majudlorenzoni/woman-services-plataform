import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { Endereco } from './endereco.entity';
import { Servico } from './servico.entity';

@Entity()
export class Servidora {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nome: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 20 })
  telefone: string;

  @OneToOne(() => Endereco, (endereco) => endereco.servidora)
  endereco: Endereco;

  @OneToMany(() => Servico, (servico) => servico.servidoras)
  servicos: Servico[];
}
