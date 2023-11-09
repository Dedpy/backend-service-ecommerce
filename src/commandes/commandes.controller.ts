import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CommandesService } from './commandes.service';
import { CreateCommandeDto } from './dto/create-commande.dto';
import { UpdateCommandeDto } from './dto/update-commande.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiBearerAuth()
@ApiTags('commandes')
@Controller('commandes')
export class CommandesController {
  constructor(private readonly commandesService: CommandesService) {}

  @Post()
  @ApiOperation({ summary: 'Create commande' })
  @ApiResponse({
    status: 200,
    description: 'The commande has been successfully created.',
  })
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createCommandeDto: CreateCommandeDto) {
    return this.commandesService.create(createCommandeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all commandes' })
  @ApiResponse({
    status: 200,
    description: 'All commandes',
  })
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.commandesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one commande' })
  @ApiResponse({
    status: 200,
    description: 'One commande',
  })
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string) {
    return this.commandesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update commande' })
  @ApiResponse({
    status: 200,
    description: 'The commande has been successfully updated.',
  })
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id') id: string,
    @Body() updateCommandeDto: UpdateCommandeDto,
  ) {
    return this.commandesService.update(+id, updateCommandeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete commande' })
  @ApiResponse({
    status: 200,
    description: 'The commande has been successfully deleted.',
  })
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.commandesService.remove(+id);
  }
}
