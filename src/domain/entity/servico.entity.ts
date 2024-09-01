import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Servidora } from './servidora.entity';
import { Solicitacao } from './solicitacao.entity';
import { ServicoTipo } from './servico-tipo.entity';

@Entity()
export class Servico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nome: string;

  @OneToMany(() => Servidora, servidora => servidora.servicos)
  servidoras: Servidora[];

  @OneToMany(() => Solicitacao, solicitacao => solicitacao.servico)
  solicitacoes: Solicitacao[];

  @OneToMany(() => ServicoTipo, servicoTipo => servicoTipo.servico)
  servicoTipos: ServicoTipo[];
}
