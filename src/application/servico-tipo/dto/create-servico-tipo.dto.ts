import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateServicoTipoDto {
  @ApiProperty({ description: 'ID do serviço', example: 1 })
  @IsNotEmpty()
  @IsInt()
  servicoId: number;

  @ApiProperty({ description: 'ID do tipo de serviço', example: 2 })
  @IsNotEmpty()
  @IsInt()
  tipoId: number;
}
