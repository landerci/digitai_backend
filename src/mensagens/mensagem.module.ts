//crie o modulo para mensagem

import { Module } from '@nestjs/common';
import { MensagemService } from './mensagem.service';
import { mensagemProviders } from './mensagem.providers';
import { DatabaseModule } from '../database/database.module';
import { usuarioProviders } from 'src/usuarios/usuario.providers';
import { UsuarioService } from 'src/usuarios/usuario.service';
import { MensagemController } from './mensagem.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [MensagemController],
    providers: [
        ...mensagemProviders,
        ...usuarioProviders,
        MensagemService,
        UsuarioService
    ],
})
export class MensagemModule {}