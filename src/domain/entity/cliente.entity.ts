/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany } from 'typeorm';
import { Endereco } from './endereco.entity';
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

  @OneToOne(() => Endereco, (endereco) => endereco.cliente)
  endereco: Endereco;

  @OneToMany(() => Solicitacao, solicitacao => solicitacao.cliente)
  solicitacoes: Solicitacao[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataCriacao: Date;
}
