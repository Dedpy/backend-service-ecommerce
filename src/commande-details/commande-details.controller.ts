import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommandeDetailsService } from './commande-details.service';
import { CreateCommandeDetailDto } from './dto/create-commande-detail.dto';
import { UpdateCommandeDetailDto } from './dto/update-commande-detail.dto';

@Controller('commande-details')
export class CommandeDetailsController {
  constructor(
    private readonly commandeDetailsService: CommandeDetailsService,
  ) {}

  @Post()
  create(@Body() createCommandeDetailDto: CreateCommandeDetailDto) {
    return this.commandeDetailsService.create(createCommandeDetailDto);
  }

  @Get()
  findAll() {
    return this.commandeDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commandeDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCommandeDetailDto: UpdateCommandeDetailDto,
  ) {
    return this.commandeDetailsService.update(+id, updateCommandeDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commandeDetailsService.remove(+id);
  }
}
