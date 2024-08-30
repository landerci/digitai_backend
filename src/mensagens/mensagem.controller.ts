import { Body, Controller, Get, Post } from '@nestjs/common';
import { Mensagem } from './mensagem.entity';
import { MensagemService } from './mensagem.service';
import { ResultadoDto } from 'src/dto/result.dto';
@Controller('mensagens')
export class MensagemController {
    constructor(private readonly mensagemService: MensagemService) {}

    @Get()
    async getAll(): Promise<Mensagem[]> {
        console.log("chegou get")
        return this.mensagemService.findAll();
    }

    @Post()
    async create(@Body() mensagem: Mensagem): Promise<ResultadoDto> {
        console.log("chegou mensagem" , mensagem)
        console.log(mensagem);
        return this.mensagemService.create(mensagem);
    }
}
    