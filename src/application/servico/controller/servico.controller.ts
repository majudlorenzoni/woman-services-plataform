import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { ServicoService } from 'src/domain/services/servico.service';
import { CreateServicoDto } from '../dto/create-servico.dto';
import { UpdateServicoDto } from '../dto/update-servico.dto';
import { Servico } from 'src/domain/entity/servico.entity';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('servicos')
@Controller('servicos')
export class ServicoController {
  constructor(private readonly servicoService: ServicoService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo serviço' })
  @ApiBody({ type: CreateServicoDto })
  @ApiResponse({ status: 201, description: 'Serviço criado com sucesso.', type: Servico })
  @ApiResponse({ status: 400, description: 'Requisição inválida.' })
  async create(@Body() createServicoDto: CreateServicoDto): Promise<Servico> {
    const servico = await this.servicoService.create(createServicoDto as Servico);
    return servico;
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os serviços' })
  @ApiResponse({ status: 200, description: 'Lista de serviços.', type: [Servico] })
  async findAll(): Promise<Servico[]> {
    return await this.servicoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um serviço pelo ID' })
  @ApiResponse({ status: 200, description: 'Serviço encontrado.', type: Servico })
  @ApiResponse({ status: 404, description: 'Serviço não encontrado.' })
  async findById(@Param('id') id: number): Promise<Servico> {
    const servico = await this.servicoService.findById(id);
    if (!servico) {
      throw new NotFoundException('Serviço não encontrado');
    }
    return servico;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um serviço existente' })
  @ApiBody({ type: UpdateServicoDto })
  @ApiResponse({ status: 200, description: 'Serviço atualizado com sucesso.', type: Servico })
  @ApiResponse({ status: 404, description: 'Serviço não encontrado.' })
  async update(@Param('id') id: number, @Body() updateServicoDto: UpdateServicoDto): Promise<Servico> {
    const servico = await this.servicoService.findById(id);
    if (!servico) {
      throw new NotFoundException('Serviço não encontrado');
    }
    return await this.servicoService.update({ ...servico, ...updateServicoDto });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir um serviço pelo ID' })
  @ApiResponse({ status: 204, description: 'Serviço excluído com sucesso.' })
  @ApiResponse({ status: 404, description: 'Serviço não encontrado.' })
  async delete(@Param('id') id: number): Promise<void> {
    const servico = await this.servicoService.findById(id);
    if (!servico) {
      throw new NotFoundException('Serviço não encontrado');
    }
    await this.servicoService.delete(id);
  }

  @Get('tipo/:tipoId')
  @ApiOperation({ summary: 'Listar serviços por tipo' })
  @ApiResponse({ status: 200, description: 'Lista de serviços por tipo.', type: [Servico] })
  async findByTipo(@Param('tipoId') tipoId: number): Promise<Servico[]> {
    return await this.servicoService.findByTipo(tipoId);
  }
}
