import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log("passando por aqui" )
    return 'Hello Tech Talks!';
  }
  cadastrarUsuario(data): string {
    console.log("esse é o usuário " , data)
    return 'Cadastrado com sucesso!';
  }
}
