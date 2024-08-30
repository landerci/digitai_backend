//crie os providers para mensagens

import { Injectable, Inject } from '@nestjs/common';
import { NoVersionOrUpdateDateColumnError, Repository } from 'typeorm';
import { Mensagem } from './mensagem.entity';
import { ResultadoDto } from 'src/dto/result.dto';
import { Usuario } from 'src/usuarios/usuario.entity';

export const mensagemProviders = [
    {
        provide: 'MENSAGEM_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(Mensagem),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: 'USUARIO_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(Usuario),
        inject: ['DATA_SOURCE'],
    }
]
