import { IsDecimal, IsNotEmpty } from 'class-validator';
import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';

export class CreateCommandeDto {
  id: number;
  @IsDecimal()
  @IsNotEmpty()
  prix: number;
  @IsNotEmpty()
  user: User;
  @IsNotEmpty()
  products: Product[];
}
