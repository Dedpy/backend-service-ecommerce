import { Commande } from 'src/commandes/entities/commande.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty({
    example: 'wassim',
    description: 'User username',
  })
  username: string;

  @Column()
  @ApiProperty({
    example: 'password',
    description: 'User password',
  })
  password: string;

  @OneToMany(() => Commande, (commande) => commande.user)
  commandes: Commande[];
}
