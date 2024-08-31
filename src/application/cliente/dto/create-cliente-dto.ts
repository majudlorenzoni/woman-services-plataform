/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsEmail, IsOptional, IsArray, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { Solicitacao } from 'src/domain/entity/solicitacao.entity';
import { EnderecoDto } from '../../endereco/dto/endereco.dto';
export class CreateClienteDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  telefone: string;


  @IsNotEmpty()
  @Type(() => EnderecoDto)
  endereco: EnderecoDto;

  @IsArray()
  @Type(() => Object)
  @IsOptional()
  solicitacoes?: Solicitacao[];

  @IsNotEmpty()
  @IsDate()
  dataCriacao: Date;
}
