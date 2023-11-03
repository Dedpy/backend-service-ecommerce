import { Commande } from 'src/commandes/entities/commande.entity';
import { Product } from 'src/products/entities/product.entity';

export class CreateCommandeDetailDto {
  id: number;
  quantite: number;
  commande: Commande;
  product: Product;
}
