import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ServicoTipoService } from 'src/domain/services/servico-tipo.service';
import { CreateServicoTipoDto } from '../dto/create-servico-tipo.dto';
import { UpdateServicoTipoDto } from '../dto/update-sertico-tipo.dto';
import { ServicoTipo } from 'src/domain/entity/servico-tipo.entity';

@Controller('servico-tipo')
export class ServicoTipoController {
  constructor(private readonly servicoTipoService: ServicoTipoService) {}

  @Get()
  async findAll(): Promise<ServicoTipo[]> {
    return await this.servicoTipoService.findAll();
  }

  @Post()
  async create(@Body() createServicoTipoDto: CreateServicoTipoDto): Promise<ServicoTipo> {
    return await this.servicoTipoService.create(createServicoTipoDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateServicoTipoDto: UpdateServicoTipoDto): Promise<ServicoTipo> {
    return await this.servicoTipoService.update(id, updateServicoTipoDto);
  }


  @Get(':id')
  async findById(@Param('id') id: number): Promise<ServicoTipo> {
    return await this.servicoTipoService.findById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.servicoTipoService.delete(id);
  }
}