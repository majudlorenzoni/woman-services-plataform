import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TipoServico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, unique: true })
  nome: string;
}
