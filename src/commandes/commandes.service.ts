import { Injectable } from '@nestjs/common';
import { CreateCommandeDto } from './dto/create-commande.dto';
import { UpdateCommandeDto } from './dto/update-commande.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Commande } from './entities/commande.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommandesService {
  constructor(
    @InjectRepository(Commande)
    private commandeRepository: Repository<Commande>,
  ) {}

  async create(createCommandeDto: CreateCommandeDto) {
    return this.commandeRepository.save(createCommandeDto);
  }

  async findAll(): Promise<Commande[]> {
    try {
      return await this.commandeRepository.find({});
    } catch (err) {
      return err;
    }
  }

  async findOne(id: number): Promise<Commande> {
    try {
      return await this.commandeRepository.findOneBy({ id });
    } catch (err) {
      return err;
    }
  }

  async update(
    id: number,
    updateCommandeDto: UpdateCommandeDto,
  ): Promise<Commande | undefined> {
    const commande = await this.commandeRepository.findOneBy({ id });
    if (!commande) {
      return undefined;
    }
    this.commandeRepository.merge(commande, updateCommandeDto);
    return this.commandeRepository.save(commande);
  }

  async remove(id: number): Promise<void> {
    await this.commandeRepository.delete(id);
  }
}
