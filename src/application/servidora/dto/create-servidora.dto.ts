import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsDate } from 'class-validator';

export class CreateServidoraDto {
  @ApiProperty({
    description: 'Nome da servidora',
  })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({
    description: 'Email da servidora',
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    description: 'Telefone da servidora',
  })
  @IsNotEmpty()
  @IsString()
  telefone: string;

  @ApiProperty({
    description: 'Rua do endereço da servidora',
  })
  @IsNotEmpty()
  @IsString()
  rua: string;

  @ApiProperty({
    description: 'Número do endereço da servidora',
  })
  @IsNotEmpty()
  @IsString()
  numero: string;

  @ApiProperty({
    description: 'Complemento do endereço da servidora',
    required: false,
  })
  @IsOptional()
  @IsString()
  complemento?: string;

  @ApiProperty({
    description: 'CEP do endereço da servidora',
  })
  @IsNotEmpty()
  @IsString()
  cep: string;

  @ApiProperty({
    description: 'Cidade do endereço da servidora',
  })
  @IsNotEmpty()
  @IsString()
  cidade: string;

  @ApiProperty({
    description: 'Estado do endereço da servidora',
  })
  @IsNotEmpty()
  @IsString()
  estado: string;

  @ApiProperty({
    description: 'Data de criação da servidora',
    type: String,
    required: false,
  })
  @IsOptional()
  @IsDate()
  dataCriacao?: Date;
}
