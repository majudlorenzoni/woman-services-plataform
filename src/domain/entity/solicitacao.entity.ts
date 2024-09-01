import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Cliente } from './cliente.entity';
import { Servico } from './servico.entity';

@Entity()
export class Solicitacao {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cliente, cliente => cliente.solicitacoes, { eager: true, onDelete: 'CASCADE' })
  cliente: Cliente;

  @ManyToOne(() => Servico, servico => servico.solicitacoes, { eager: true, onDelete: 'CASCADE' })
  servico: Servico;

  @Column({ type: 'varchar', length: 100 })
  localizacao: string;

  @Column({ type: 'timestamp' })
  disponibilidade: Date;

  @Column({ type: 'text' })
  descricao: string;
}
