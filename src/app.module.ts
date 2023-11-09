import { Module } from '@nestjs/common';

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
import { ConfigModule } from '@nestjs/config';
import { ConfigurationModule } from 'config/config.module';

@Module({
  imports: [
    ConfigurationModule,
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [User, Product, Commande, CommandeDetail],
      synchronize: true,
    }),
    ConfigModule.forRoot({}),
    UsersModule,
    ProductsModule,
    CommandesModule,
    CommandeDetailsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
