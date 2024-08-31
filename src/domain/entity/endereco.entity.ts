import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Cliente } from './cliente.entity';
import { Servidora } from './servidora.entity';

@Entity()
export class Endereco {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  rua: string;

  @Column({ type: 'varchar', length: 10 })
  numero: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  complemento?: string;

  @Column({ type: 'varchar', length: 8 })
  cep: string;

  @Column({ type: 'varchar', length: 100 })
  cidade: string;

  @Column({ type: 'varchar', length: 100 })
  estado: string;

  @OneToOne(() => Cliente, (cliente) => cliente.endereco)
  @JoinColumn()
  cliente: Cliente;

  @OneToOne(() => Servidora, (servidora) => servidora.endereco)
  @JoinColumn()
  servidora: Servidora;
}
