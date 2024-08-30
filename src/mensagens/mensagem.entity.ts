
import { Usuario } from 'src/usuarios/usuario.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToMany } from 'typeorm';

@Entity()
export class Mensagem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  text: string;

  @ManyToMany(() => Usuario, (usuario) => usuario.mensagens)
  usuario: Usuario

  @Column()
  dataCriacao: Date; 
}