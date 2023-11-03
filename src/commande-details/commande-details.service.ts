import { Injectable } from '@nestjs/common';
import { CreateCommandeDetailDto } from './dto/create-commande-detail.dto';
import { UpdateCommandeDetailDto } from './dto/update-commande-detail.dto';
import { CommandeDetail } from './entities/commande-detail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CommandeDetailsService {
  constructor(
    @InjectRepository(CommandeDetail)
    private commandeDetailRepository: Repository<CommandeDetail>,
  ) {}

  async create(createCommandeDetailDto: CreateCommandeDetailDto) {
    return this.commandeDetailRepository.save(createCommandeDetailDto);
  }

  async findAll(): Promise<CommandeDetail[]> {
    try {
      return await this.commandeDetailRepository.find({});
    } catch (err) {
      return err;
    }
  }

  async findOne(id: number): Promise<CommandeDetail> {
    try {
      return await this.commandeDetailRepository.findOneBy({ id });
    } catch (err) {
      return err;
    }
  }

  async update(
    id: number,
    updateCommandeDetailDto: UpdateCommandeDetailDto,
  ): Promise<CommandeDetail | undefined> {
    const commandeDetail = await this.commandeDetailRepository.findOneBy({
      id,
    });
    if (!commandeDetail) {
      return undefined;
    }
    this.commandeDetailRepository.merge(
      commandeDetail,
      updateCommandeDetailDto,
    );
    return this.commandeDetailRepository.save(commandeDetail);
  }

  async remove(id: number): Promise<void> {
    await this.commandeDetailRepository.delete(id);
  }
}
