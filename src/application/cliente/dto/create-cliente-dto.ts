import { IsNotEmpty, IsString, IsEmail, IsOptional, IsArray, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Solicitacao } from 'src/domain/entity/solicitacao.entity';

export class CreateClienteDto {
  @ApiProperty({
    description: 'Nome do cliente',
  })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({
    description: 'Email do cliente',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Telefone do cliente',
  })
  @IsNotEmpty()
  @IsString()
  telefone: string;

  @ApiProperty({
    description: 'Rua do cliente',
  })
  @IsNotEmpty()
  @IsString()
  rua: string;

  @ApiProperty({
    description: 'Número do cliente',
  })
  @IsNotEmpty()
  @IsString()
  numero: string;

  @ApiProperty({
    description: 'Complemento do endereço do cliente',
    required: false,
  })
  @IsOptional()
  @IsString()
  complemento?: string;

  @ApiProperty({
    description: 'CEP do cliente',
  })
  @IsNotEmpty()
  @IsString()
  cep: string;

  @ApiProperty({
    description: 'Cidade do cliente',
  })
  @IsNotEmpty()
  @IsString()
  cidade: string;

  @ApiProperty({
    description: 'Estado do cliente',
  })
  @IsNotEmpty()
  @IsString()
  estado: string;

  @ApiProperty({
    description: 'Lista de solicitações do cliente',
    type: [Solicitacao],
    required: false,
  })
  @IsArray()
  @Type(() => Object)
  @IsOptional()
  solicitacoes?: Solicitacao[];
}

