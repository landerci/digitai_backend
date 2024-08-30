import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuarios/usuario.module';
import { MensagemModule } from './mensagens/mensagem.module';

@Module({
  imports: [UsuarioModule, MensagemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
