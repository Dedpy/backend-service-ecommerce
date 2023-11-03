import { CommandeDetail } from 'src/commande-details/entities/commande-detail.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('Products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  //   price DECIMAL(10, 2) NOT NULL
  @Column('decimal', { nullable: false, precision: 10, scale: 2 })
  price: number;

  @Column({ nullable: false })
  inventory: number;

  @OneToMany(() => CommandeDetail, (commandeDetails) => commandeDetails.product)
  commandeDetails: CommandeDetail[];
}
