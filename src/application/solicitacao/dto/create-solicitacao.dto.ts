import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDateString, IsInt, IsPositive } from 'class-validator';

export class CreateSolicitacaoDto {
  @ApiProperty({
    description: 'ID do cliente associado à solicitação',
    example: 1,
  })
  @IsInt()
  @IsPositive()
  clienteId: number;

  @ApiProperty({
    description: 'ID do serviço associado à solicitação',
    example: 2,
  })
  @IsInt()
  @IsPositive()
  servicoId: number;

  @ApiProperty({
    description: 'Localização da solicitação',
    example: 'Rua das Flores, 123',
  })
  @IsString()
  @IsNotEmpty()
  localizacao: string;

  @ApiProperty({
    description: 'Data e hora de disponibilidade para o serviço',
    example: '2024-09-01T15:00:00Z',
  })
  @IsDateString()
  disponibilidade: Date;

  @ApiProperty({
    description: 'Descrição da solicitação',
    example: 'Preciso de atendimento urgente.',
  })
  @IsString()
  @IsNotEmpty()
  descricao: string;
}
