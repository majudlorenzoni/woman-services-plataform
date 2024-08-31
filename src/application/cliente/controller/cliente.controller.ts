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
import { ClienteService } from 'src/domain/services/cliente.service';
import { CreateClienteDto } from 'src/application/cliente/dto/create-cliente-dto';
import { UpdateClienteDto } from 'src/application/cliente/dto/update-cliente-dto';
import { Cliente } from 'src/domain/entity/cliente.entity';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  async criarCliente(@Body() createClienteDto: CreateClienteDto): Promise<Cliente> {
    const cliente = await this.clienteService.create(createClienteDto);
    return cliente;
  }

  @Get()
  async listarClientes(): Promise<Cliente[]> {
    return await this.clienteService.findAll();
  }

  @Get(':id')
  async listarClientePorId(@Param('id') id: number): Promise<Cliente> {
    const cliente = await this.clienteService.findById(id);
    if (!cliente) {
      throw new NotFoundException('Cliente não encontrado');
    }
    return cliente;
  }

  @Get('email/:email')
  async listarClientePorEmail(@Param('email') email: string): Promise<Cliente | null> {
    const cliente = await this.clienteService.findByEmail(email);
    if (!cliente) {
      throw new NotFoundException('Cliente não encontrado');
    }
    return cliente;
  }

  @Put(':id')
  async atualizarCliente(
    @Param('id') id: number,
    @Body() updateClienteDto: UpdateClienteDto,
  ): Promise<Cliente> {
    return await this.clienteService.update(id, updateClienteDto);
  }

  @Delete(':id')
  async deletarCliente(@Param('id') id: number): Promise<void> {
    const cliente = await this.clienteService.findById(id);
    if (!cliente) {
      throw new NotFoundException('Cliente não encontrado');
    }
    await this.clienteService.delete(id);
  }
}
