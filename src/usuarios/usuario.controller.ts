import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';
 

@Controller('usuario')
export class UsuarioController {

    constructor(private usuarioService: UsuarioService) {}
    @Post()
    async create(@Body() usuario: Usuario, @Res() res) {
        console.log("passou por aqui, create pessoa", usuario)
        const result = await this.usuarioService.cadastrarPessoa(usuario);
        res.json(result);
    }   
}
