import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Servidora } from './servidora.entity';

@Entity()
export class Servico {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Servidora, servidora => servidora.servicos)
  servidora: Servidora;

  @Column({ type: 'varchar', length: 100 })
  tipo: string;

  @Column({ type: 'text' })
  descricao: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  preco: number;

  @Column({ type: 'varchar', length: 100 })
  localidade: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dataCriacao: Date;
}
