import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { SolicitacaoService } from 'src/domain/services/solicitacao.service';
import { CreateSolicitacaoDto } from '../dto/create-solicitacao.dto';
import { UpdateSolicitacaoDto } from '../dto/update-solicitacao.dto';
import { Solicitacao } from 'src/domain/entity/solicitacao.entity';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('solicitacoes')
@Controller('solicitacoes')
export class SolicitacaoController {
  constructor(private readonly solicitacaoService: SolicitacaoService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova solicitação' })
  @ApiBody({ type: CreateSolicitacaoDto })
  @ApiResponse({ status: 201, description: 'Solicitação criada com sucesso.', type: Solicitacao })
  @ApiResponse({ status: 400, description: 'Requisição inválida.' })
  async create(@Body() createSolicitacaoDto: CreateSolicitacaoDto): Promise<Solicitacao> {
    return await this.solicitacaoService.create(createSolicitacaoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as solicitações' })
  @ApiResponse({ status: 200, description: 'Lista de solicitações.', type: [Solicitacao] })
  async findAll(): Promise<Solicitacao[]> {
    return await this.solicitacaoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma solicitação pelo ID' })
  @ApiResponse({ status: 200, description: 'Solicitação encontrada.', type: Solicitacao })
  @ApiResponse({ status: 404, description: 'Solicitação não encontrada.' })
  async findById(@Param('id') id: number): Promise<Solicitacao> {
    const solicitacao = await this.solicitacaoService.findById(id);
    if (!solicitacao) {
      throw new NotFoundException('Solicitação não encontrada');
    }
    return solicitacao;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar uma solicitação existente' })
  @ApiBody({ type: UpdateSolicitacaoDto })
  @ApiResponse({ status: 200, description: 'Solicitação atualizada com sucesso.', type: Solicitacao })
  @ApiResponse({ status: 404, description: 'Solicitação não encontrada.' })
  async update(@Param('id') id: number, @Body() updateSolicitacaoDto: UpdateSolicitacaoDto): Promise<Solicitacao> {
    const solicitacao = await this.solicitacaoService.findById(id);
    if (!solicitacao) {
      throw new NotFoundException('Solicitação não encontrada');
    }
    return await this.solicitacaoService.update(id, updateSolicitacaoDto as Partial<Solicitacao>);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir uma solicitação pelo ID' })
  @ApiResponse({ status: 204, description: 'Solicitação excluída com sucesso.' })
  @ApiResponse({ status: 404, description: 'Solicitação não encontrada.' })
  async delete(@Param('id') id: number): Promise<void> {
    const solicitacao = await this.solicitacaoService.findById(id);
    if (!solicitacao) {
      throw new NotFoundException('Solicitação não encontrada');
    }
    await this.solicitacaoService.delete(id);
  }

  @Get('cliente/:clienteId')
  @ApiOperation({ summary: 'Listar solicitações por cliente' })
  @ApiResponse({ status: 200, description: 'Lista de solicitações por cliente.', type: [Solicitacao] })
  async findByCliente(@Param('clienteId') clienteId: number): Promise<Solicitacao[]> {
    return await this.solicitacaoService.findByCliente(clienteId);
  }

  @Get('servico/:servicoId')
  @ApiOperation({ summary: 'Listar solicitações por serviço' })
  @ApiResponse({ status: 200, description: 'Lista de solicitações por serviço.', type: [Solicitacao] })
  async findByServico(@Param('servicoId') servicoId: number): Promise<Solicitacao[]> {
    return await this.solicitacaoService.findByServico(servicoId);
  }
}
