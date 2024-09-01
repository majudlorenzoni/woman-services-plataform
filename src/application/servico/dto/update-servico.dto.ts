import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { CreateServicoDto } from './create-servico.dto';

export class UpdateServicoDto extends PartialType(CreateServicoDto) {
  @ApiProperty({
    description: 'Nome do serviço',
    required: false,
  })
  @IsOptional()
  @IsString()
  nome?: string;
}
