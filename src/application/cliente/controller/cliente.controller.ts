import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Put,
  NotFoundException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { ClienteService } from 'src/domain/services/cliente.service';
import { CreateClienteDto } from 'src/application/cliente/dto/create-cliente-dto';
import { UpdateClienteDto } from 'src/application/cliente/dto/update-cliente-dto';
import { Cliente } from 'src/domain/entity/cliente.entity';

@ApiTags('Clientes')
@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo cliente' })
  @ApiBody({ type: CreateClienteDto })
  @ApiResponse({ status: 201, description: 'Cliente criado com sucesso.', type: Cliente })
  @ApiResponse({ status: 400, description: 'Requisição inválida.' })
  async criarCliente(@Body() createClienteDto: CreateClienteDto): Promise<Cliente> {
    const cliente = await this.clienteService.create(createClienteDto);
    return cliente;
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os clientes' })
  @ApiResponse({ status: 200, description: 'Lista de clientes.', type: [Cliente] })
  async listarClientes(): Promise<Cliente[]> {
    return await this.clienteService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar cliente por ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID do cliente' })
  @ApiResponse({ status: 200, description: 'Cliente encontrado.', type: Cliente })
  @ApiResponse({ status: 404, description: 'Cliente não encontrado.' })
  async listarClientePorId(@Param('id') id: number): Promise<Cliente> {
    const cliente = await this.clienteService.findById(id);
    if (!cliente) {
      throw new NotFoundException('Cliente não encontrado');
    }
    return cliente;
  }

  @Get('email/:email')
  @ApiOperation({ summary: 'Buscar cliente por email' })
  @ApiParam({ name: 'email', type: String, description: 'Email do cliente' })
  @ApiResponse({ status: 200, description: 'Cliente encontrado.', type: Cliente })
  @ApiResponse({ status: 404, description: 'Cliente não encontrado.' })
  async listarClientePorEmail(@Param('email') email: string): Promise<Cliente | null> {
    const cliente = await this.clienteService.findByEmail(email);
    if (!cliente) {
      throw new NotFoundException('Cliente não encontrado');
    }
    return cliente;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar cliente existente' })
  @ApiParam({ name: 'id', type: Number, description: 'ID do cliente' })
  @ApiBody({ type: UpdateClienteDto })
  @ApiResponse({ status: 200, description: 'Cliente atualizado com sucesso.', type: Cliente })
  @ApiResponse({ status: 404, description: 'Cliente não encontrado.' })
  async atualizarCliente(
    @Param('id') id: number,
    @Body() updateClienteDto: UpdateClienteDto,
  ): Promise<Cliente> {
    return await this.clienteService.update(id, updateClienteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar cliente' })
  @ApiParam({ name: 'id', type: Number, description: 'ID do cliente' })
  @ApiResponse({ status: 204, description: 'Cliente deletado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Cliente não encontrado.' })
  async deletarCliente(@Param('id') id: number): Promise<void> {
    const cliente = await this.clienteService.findById(id);
    if (!cliente) {
      throw new NotFoundException('Cliente não encontrado');
    }
    await this.clienteService.delete(id);
  }
}
