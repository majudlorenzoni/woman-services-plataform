import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
import { Servidora } from 'src/domain/entity/servidora.entity';
import { CreateServidoraDto } from 'src/application/servidora/dto/create-servidora.dto';
import { UpdateServidoraDto } from 'src/application/servidora/dto/update-servidora.dto';
import { FindByCidadeUseCase } from 'src/application/servidora/use-cases/find-by-cidade.use-case';
import { FindByEmailUseCase } from 'src/application/servidora/use-cases/find-email.use-case';
import { CreateServidoraUseCase } from 'src/application/servidora/use-cases/create-servidora.use-case';
import { UpdateServidoraUseCase } from 'src/application/servidora/use-cases/update-servidora.use-case';
import { DeleteServidoraUseCase } from 'src/application/servidora/use-cases/delete-servidora.use-case';
import { FindAllServidoraUseCase } from 'src/application/servidora/use-cases/find-all-servidoras.use-case';
import { FindByIdServidoraUseCase } from 'src/application/servidora/use-cases/find-by-id-servidora.use-case';

@ApiTags('Servidoras')
@Controller('servidoras')
export class ServidoraController {
  constructor(
    private readonly findAllServidoraUseCase: FindAllServidoraUseCase,
    private readonly findByIdServidoraUseCase: FindByIdServidoraUseCase,
    private readonly createServidoraUseCase: CreateServidoraUseCase,
    private readonly updateServidoraUseCase: UpdateServidoraUseCase,
    private readonly deleteServidoraUseCase: DeleteServidoraUseCase,
    private readonly findByEmailUseCase: FindByEmailUseCase,
    private readonly findByCidadeUseCase: FindByCidadeUseCase,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Listar todas as servidoras' })
  @ApiResponse({ status: 200, description: 'Listagem de servidoras', type: [Servidora] })
  async listarServidoras(): Promise<Servidora[]> {
    return this.findAllServidoraUseCase.execute();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar servidora por ID' })
  @ApiParam({ name: 'id', description: 'ID da servidora' })
  @ApiResponse({ status: 200, description: 'Detalhes da servidora', type: Servidora })
  @ApiResponse({ status: 404, description: 'Servidora não encontrada' })
  async listarServidoraPorId(@Param('id') id: number): Promise<Servidora> {
    const servidora = await this.findByIdServidoraUseCase.execute(id);
    if (!servidora) {
      throw new NotFoundException('Servidora não encontrada');
    }
    return servidora;
  }

  @Post()
  @ApiOperation({ summary: 'Criar nova servidora' })
  @ApiResponse({ status: 201, description: 'Servidora criada com sucesso', type: Servidora })
  async criarServidora(@Body() createServidoraDto: CreateServidoraDto): Promise<Servidora> {
    return this.createServidoraUseCase.execute(createServidoraDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar dados da servidora' })
  @ApiParam({ name: 'id', description: 'ID da servidora' })
  @ApiResponse({ status: 200, description: 'Servidora atualizada com sucesso', type: Servidora })
  @ApiResponse({ status: 404, description: 'Servidora não encontrada' })
  async atualizarServidora(
    @Param('id') id: number,
    @Body() updateServidoraDto: UpdateServidoraDto,
  ): Promise<Servidora> {
    const servidora = await this.findByIdServidoraUseCase.execute(id);
    if (!servidora) {
      throw new NotFoundException('Servidora não encontrada');
    }
    return this.updateServidoraUseCase.execute(id, updateServidoraDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir servidora' })
  @ApiParam({ name: 'id', description: 'ID da servidora' })
  @ApiResponse({ status: 204, description: 'Servidora excluída com sucesso' })
  @ApiResponse({ status: 404, description: 'Servidora não encontrada' })
  async deletarServidora(@Param('id') id: number): Promise<void> {
    const servidora = await this.findByIdServidoraUseCase.execute(id);
    if (!servidora) {
      throw new NotFoundException('Servidora não encontrada');
    }
    return this.deleteServidoraUseCase.execute(id);
  }

  @Get('email/:email')
  @ApiOperation({ summary: 'Buscar servidora por email' })
  @ApiParam({ name: 'email', description: 'Email da servidora' })
  @ApiResponse({ status: 200, description: 'Servidora encontrada', type: Servidora })
  @ApiResponse({ status: 404, description: 'Servidora não encontrada' })
  async listarServidoraPorEmail(@Param('email') email: string): Promise<Servidora> {
    const servidora = await this.findByEmailUseCase.execute(email);
    if (!servidora) {
      throw new NotFoundException('Servidora não encontrada');
    }
    return servidora;
  }

  @Get('cidade')
  @ApiOperation({ summary: 'Buscar servidoras por cidade' })
  @ApiQuery({ name: 'cidade', description: 'Cidade onde a servidora reside' })
  @ApiResponse({ status: 200, description: 'Lista de servidoras encontradas', type: [Servidora] })
  async listarServidorasPorCidade(@Query('cidade') cidade: string): Promise<Servidora[]> {
    return this.findByCidadeUseCase.execute(cidade);
  }
}
