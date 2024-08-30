import { Injectable, Inject } from '@nestjs/common';
import { NoVersionOrUpdateDateColumnError, Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { ResultadoDto } from 'src/dto/result.dto';
@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>
 
  ) {}



  async buscarUsuarioNome(name: string): Promise<Usuario> {
    return this.usuarioRepository.findOneBy({ name: name });
  }

 
  async cadastrarPessoa(novaPessoa:Usuario):Promise<ResultadoDto>{
    let usuario = new Usuario()
    usuario.name = novaPessoa.name
    console.log("assim esta o usuario" , usuario)
   
    return  this.usuarioRepository.save(usuario)
    .then((result) =>{
      return <ResultadoDto>{
        status:true,
        mensagem:"salvou"
      }
    })
    .catch((error) => {
      console.log("caiu no erro" , error)
      return <ResultadoDto>{
        status:false,
        mensagem:error
      }
    })

    }



 
  }
  