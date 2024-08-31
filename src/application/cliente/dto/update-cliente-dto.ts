/* eslint-disable prettier/prettier */
import { IsOptional, IsString, IsEmail, IsObject, IsArray, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { Solicitacao } from 'src/domain/entity/solicitacao.entity';

export class UpdateClienteDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  telefone?: string;

  @IsOptional()
  @IsObject()
  @Type(() => Object)
  endereco?: {
    rua?: string;
    numero?: string;
    complemento?: string;
    cep?: string;
    cidade?: string;
    estado?: string;
  };

  @IsOptional()
  @IsArray()
  @Type(() => Object)
  solicitacoes?: Solicitacao[];

  @IsOptional()
  @IsDate()
  dataCriacao?: Date;
}
