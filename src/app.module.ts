import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';
import { User } from './users/entities/user.entity';
import { CommandesModule } from './commandes/commandes.module';
import { Commande } from './commandes/entities/commande.entity';
import { CommandeDetailsModule } from './commande-details/commande-details.module';
import { CommandeDetail } from './commande-details/entities/commande-detail.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'bradery',
      entities: [User, Product, Commande, CommandeDetail],
      synchronize: false,
    }),
    UsersModule,
    ProductsModule,
    CommandesModule,
    CommandeDetailsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
