import { CommandeDetail } from 'src/commande-details/entities/commande-detail.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('Commandes')
export class Commande {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  prix: number;

  @ManyToOne(() => User, (user) => user.commandes)
  user: User;

  @OneToMany(
    () => CommandeDetail,
    (commandeDetails) => commandeDetails.commande,
  )
  commandeDetails: CommandeDetail[];
}
