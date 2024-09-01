import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsOptional, IsDate } from 'class-validator';
import { CreateServidoraDto } from './create-servidora.dto';

export class UpdateServidoraDto extends PartialType(CreateServidoraDto) {
  @ApiProperty({
    description: 'Nome da servidora',
    required: false,
  })
  @IsOptional()
  @IsString()
  nome?: string;

  @ApiProperty({
    description: 'Email da servidora',
    required: false,
  })
  @IsOptional()
  @IsString()
  email?: string;

  @ApiProperty({
    description: 'Telefone da servidora',
    required: false,
  })
  @IsOptional()
  @IsString()
  telefone?: string;

  @ApiProperty({
    description: 'Rua do endereço da servidora',
    required: false,
  })
  @IsOptional()
  @IsString()
  rua?: string;

  @ApiProperty({
    description: 'Número do endereço da servidora',
    required: false,
  })
  @IsOptional()
  @IsString()
  numero?: string;

  @ApiProperty({
    description: 'Complemento do endereço da servidora',
    required: false,
  })
  @IsOptional()
  @IsString()
  complemento?: string;

  @ApiProperty({
    description: 'CEP do endereço da servidora',
    required: false,
  })
  @IsOptional()
  @IsString()
  cep?: string;

  @ApiProperty({
    description: 'Cidade do endereço da servidora',
    required: false,
  })
  @IsOptional()
  @IsString()
  cidade?: string;

  @ApiProperty({
    description: 'Estado do endereço da servidora',
    required: false,
  })
  @IsOptional()
  @IsString()
  estado?: string;

  @ApiProperty({
    description: 'Data de criação da servidora',
    type: String,
    required: false,
  })
  @IsOptional()
  @IsDate()
  dataCriacao?: Date;
}
