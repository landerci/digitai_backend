
import { Mensagem } from 'src/mensagens/mensagem.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;
  
  @ManyToMany(() => Mensagem, (mensagem) => mensagem.usuario, { cascade: true })
  @JoinTable({
    name: "mensagens_pessoas",
    joinColumn: {
      name: "usuario_id"
    },
    inverseJoinColumn: {
      name: "mensagem_id"
    }
  })
  mensagens: Mensagem[]

}