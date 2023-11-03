import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';

export class CreateCommandeDto {
  id: number;
  prix: number;
  user: User;
  products: Product[];
}
