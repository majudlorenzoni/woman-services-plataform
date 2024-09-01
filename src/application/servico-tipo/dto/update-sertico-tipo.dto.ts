import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsInt } from 'class-validator';

export class UpdateServicoTipoDto {
  @ApiProperty({ description: 'ID do serviço', example: 1, required: false })
  @IsOptional()
  @IsInt()
  servicoId?: number;

  @ApiProperty({ description: 'ID do tipo de serviço', example: 2, required: false })
  @IsOptional()
  @IsInt()
  tipoId?: number;
}
