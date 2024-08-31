import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
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

  @Column({ type: 'varchar', length: 100 })
  localidade: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataCriacao: Date;

  @OneToMany(() => Servico, servico => servico.servidora)
  servicos: Servico[];
}
