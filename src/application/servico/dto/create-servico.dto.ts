import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateServicoDto {
  @ApiProperty({
    description: 'Nome do serviço',
  })
  @IsNotEmpty()
  @IsString()
  nome: string;
}
