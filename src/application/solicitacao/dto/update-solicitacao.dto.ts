import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsDateString, IsInt, IsPositive } from 'class-validator';

export class UpdateSolicitacaoDto {
  @ApiProperty({
    description: 'ID do cliente associado à solicitação (opcional)',
    required: false,
  })
  @IsInt()
  @IsPositive()
  @IsOptional()
  clienteId?: number;

  @ApiProperty({
    description: 'ID do serviço associado à solicitação (opcional)',
    required: false,
  })
  @IsInt()
  @IsPositive()
  @IsOptional()
  servicoId?: number;

  @ApiProperty({
    description: 'Localização da solicitação (opcional)',
    required: false,
  })
  @IsString()
  @IsOptional()
  localizacao?: string;

  @ApiProperty({
    description: 'Data e hora de disponibilidade para o serviço (opcional)',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  disponibilidade?: Date;

  @ApiProperty({
    description: 'Descrição da solicitação (opcional)',
    example: 'Preciso de atendimento urgente.',
    required: false,
  })
  @IsString()
  @IsOptional()
  descricao?: string;
}
