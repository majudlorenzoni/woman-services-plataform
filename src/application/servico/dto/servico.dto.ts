import { ApiProperty } from '@nestjs/swagger';
import { Servidora } from 'src/domain/entity/servidora.entity';
import { Solicitacao } from 'src/domain/entity/solicitacao.entity';
import { ServicoTipo } from 'src/domain/entity/servico-tipo.entity';

export class ServicoDto {
  @ApiProperty({
    description: 'ID do serviço',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Nome do serviço',
    example: 'Limpeza',
  })
  nome: string;

  @ApiProperty({
    description: 'Lista de servidoras associadas ao serviço',
    type: [Servidora],
    required: false,
  })
  servidoras?: Servidora[];

  @ApiProperty({
    description: 'Lista de solicitações associadas ao serviço',
    type: [Solicitacao],
    required: false,
  })
  solicitacoes?: Solicitacao[];

  @ApiProperty({
    description: 'Lista de tipos de serviço associados ao serviço',
    type: [ServicoTipo],
    required: false,
  })
  servicoTipos?: ServicoTipo[];
}
