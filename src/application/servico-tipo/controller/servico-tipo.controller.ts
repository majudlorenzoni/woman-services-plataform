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
    return this.servicoTipoService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<ServicoTipo | null> {
    return this.servicoTipoService.findById(id);
  }

  @Post()
  async create(@Body() createDto: CreateServicoTipoDto): Promise<ServicoTipo> {
    return this.servicoTipoService.create(createDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateDto: UpdateServicoTipoDto): Promise<ServicoTipo> {
    return this.servicoTipoService.update(id, updateDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.servicoTipoService.delete(id);
  }
}