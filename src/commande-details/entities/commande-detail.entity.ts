import { Commande } from 'src/commandes/entities/commande.entity';
import { Product } from 'src/products/entities/product.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('CommandeDetails')
export class CommandeDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  quantite: number;

  @ManyToOne(() => Commande, (commande) => commande.commandeDetails)
  @JoinColumn({ name: 'commandeId' })
  commande: Commande;

  @ManyToOne(() => Product, (product) => product.commandeDetails)
  @JoinColumn({ name: 'productId' })
  product: Product;
}
