import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Solicitacao } from './solicitacao.entity';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nome: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 20 })
  telefone: string;

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

  @OneToMany(() => Solicitacao, (solicitacao) => solicitacao.cliente)
  solicitacoes: Solicitacao[];
}
