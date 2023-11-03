import { Commande } from 'src/commandes/entities/commande.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Commande, (commande) => commande.user)
  commandes: Commande[];
}
