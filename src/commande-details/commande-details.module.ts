import { Module } from '@nestjs/common';
import { CommandeDetailsService } from './commande-details.service';
import { CommandeDetailsController } from './commande-details.controller';
import { CommandeDetail } from './entities/commande-detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CommandeDetail])],
  controllers: [CommandeDetailsController],
  providers: [CommandeDetailsService],
})
export class CommandeDetailsModule {}
