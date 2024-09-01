import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Servico } from './servico.entity';
import { TipoServico } from './tipo-servico.entity';

@Entity()
export class ServicoTipo {
  @PrimaryColumn()
  servicoId: number;

  @PrimaryColumn()
  tipoId: number;

  @ManyToOne(() => Servico, servico => servico.servicoTipos)
  @JoinColumn({ name: 'servicoId' })  
  servico: Servico;

  @ManyToOne(() => TipoServico, tipoServico => tipoServico.id)
  @JoinColumn({ name: 'tipoId' })  
  tipoServico: TipoServico;
}
