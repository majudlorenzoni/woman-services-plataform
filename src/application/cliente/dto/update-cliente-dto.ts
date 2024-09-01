import { IsOptional, IsString, IsEmail, IsArray, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Solicitacao } from 'src/domain/entity/solicitacao.entity';

export class UpdateClienteDto {
  @ApiProperty({
    description: 'Nome do cliente',
    required: false,
  })
  @IsOptional()
  @IsString()
  nome?: string;

  @ApiProperty({
    description: 'Email do cliente',
    required: false,
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({
    description: 'Telefone do cliente',
    required: false,
  })
  @IsOptional()
  @IsString()
  telefone?: string;

  @ApiProperty({
    description: 'Rua do cliente',
    required: false,
  })
  @IsOptional()
  @IsString()
  rua?: string;

  @ApiProperty({
    description: 'Número do cliente',
    required: false,
  })
  @IsOptional()
  @IsString()
  numero?: string;

  @ApiProperty({
    description: 'Complemento do endereço do cliente',
    required: false,
  })
  @IsOptional()
  @IsString()
  complemento?: string;

  @ApiProperty({
    description: 'CEP do cliente',
    required: false,
  })
  @IsOptional()
  @IsString()
  cep?: string;

  @ApiProperty({
    description: 'Cidade do cliente',
    required: false,
  })
  @IsOptional()
  @IsString()
  cidade?: string;

  @ApiProperty({
    description: 'Estado do cliente',
    required: false,
  })
  @IsOptional()
  @IsString()
  estado?: string;

  @ApiProperty({
    description: 'Lista de solicitações do cliente',
    type: [Solicitacao],
    required: false,
  })
  @IsOptional()
  @IsArray()
  @Type(() => Object)
  solicitacoes?: Solicitacao[];

  @ApiProperty({
    description: 'Data de criação do cliente',
    type: String,
    required: false,
  })
  @IsOptional()
  @IsDate()
  dataCriacao?: Date;
}
