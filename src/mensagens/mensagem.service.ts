//crie um service para mensagens com metodos para listar todas as mensagens e cadastrar uma nova

import { Injectable, Inject } from '@nestjs/common';
import { NoVersionOrUpdateDateColumnError, Repository } from 'typeorm';
import { Mensagem } from './mensagem.entity';
import { ResultadoDto } from 'src/dto/result.dto';
import { Usuario } from 'src/usuarios/usuario.entity';
import { UsuarioService } from 'src/usuarios/usuario.service';  

@Injectable()
export class MensagemService {
    constructor(
        @Inject('MENSAGEM_REPOSITORY')
        private mensagemRepository: Repository<Mensagem>,

        @Inject('USUARIO_REPOSITORY')
        private usuarioRepository: Repository<Usuario>,

        private usuarioService:UsuarioService
    ) {}

    async findAll(): Promise<Mensagem[]> {
        let mensagens = await this.mensagemRepository.createQueryBuilder("m").leftJoinAndSelect("m.usuario", "u").orderBy("m.dataCriacao", "ASC").getMany()
        return mensagens;
    }

    async findById(id: number): Promise<Mensagem> {
        return this.mensagemRepository.findOneById(id);
    }

    async create(mensagem: Mensagem): Promise<ResultadoDto> {

        let novaMensagem = new Mensagem();
        novaMensagem.text = mensagem.text;
        novaMensagem.dataCriacao = new Date();

        let usuario = await this.usuarioService.buscarUsuarioNome(mensagem.usuario.name);
        console.log("chegou usuario" , usuario)
        novaMensagem.usuario = usuario;
   

        return this.mensagemRepository.save(novaMensagem)
        .then((result) => {
            this.mensagemRepository.query(`insert into mensagens_pessoas (usuario_id, mensagem_id)  values (${usuario.id}, ${novaMensagem.id})`)
            this.mensagemRepository.save(novaMensagem)
            return <ResultadoDto>{
                status: true,
                mensagem: 'salvou'
            }
        })
        .catch((error) => {
            return <ResultadoDto>{
                status: false,
                mensagem: error
            }
        })
    }


}