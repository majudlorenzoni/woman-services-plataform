/* eslint-disable prettier/prettier */
import { Entity, PrimaryColumn, ManyToOne } from 'typeorm';
import { Servico } from './servico.entity';
import { TipoServico } from './tipo-servico.entity';

@Entity()
export class ServicoTipo {
  @PrimaryColumn()
  servicoId: number;

  @PrimaryColumn()
  tipoId: number;

  @ManyToOne(() => Servico, servico => servico.id)
  servico: Servico;

  @ManyToOne(() => TipoServico, tipoServico => tipoServico.id)
  tipoServico: TipoServico;
}
