import { ApiProperty } from '@nestjs/swagger';
import { CommandeDetail } from 'src/commande-details/entities/commande-detail.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('Products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  @ApiProperty({
    example: 'Product name',
    description: 'Product name',
  })
  name: string;

  //   price DECIMAL(10, 2) NOT NULL
  @Column('decimal', { nullable: false, precision: 10, scale: 2 })
  @ApiProperty({
    example: 10.2,
    description: 'Product price',
  })
  price: number;

  @Column({ nullable: false })
  @ApiProperty({
    example: 10,
    description: 'Product inventory',
  })
  inventory: number;

  @OneToMany(() => CommandeDetail, (commandeDetails) => commandeDetails.product)
  commandeDetails: CommandeDetail[];
}
