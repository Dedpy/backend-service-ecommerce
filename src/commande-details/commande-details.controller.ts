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
import { CommandeDetailsService } from './commande-details.service';
import { CreateCommandeDetailDto } from './dto/create-commande-detail.dto';
import { UpdateCommandeDetailDto } from './dto/update-commande-detail.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiBearerAuth()
@ApiTags('commande-details')
@Controller('commande-details')
export class CommandeDetailsController {
  constructor(
    private readonly commandeDetailsService: CommandeDetailsService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create commande details' })
  @ApiResponse({
    status: 200,
    description: 'The commande details has been successfully created.',
  })
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createCommandeDetailDto: CreateCommandeDetailDto) {
    return this.commandeDetailsService.create(createCommandeDetailDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all commande details' })
  @ApiResponse({
    status: 200,
    description: 'All commande details',
  })
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.commandeDetailsService.findAll();
  }

  @Get(':id')
  @Get(':id')
  @ApiOperation({ summary: 'Get one commande details' })
  @ApiResponse({
    status: 200,
    description: 'One commande details',
  })
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string) {
    return this.commandeDetailsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update commande details' })
  @ApiResponse({
    status: 200,
    description: 'The commande details has been successfully updated.',
  })
  @UseGuards(AuthGuard('jwt'))
  update(
    @Param('id') id: string,
    @Body() updateCommandeDetailDto: UpdateCommandeDetailDto,
  ) {
    return this.commandeDetailsService.update(+id, updateCommandeDetailDto);
  }

  @Delete(':id')
  @Delete(':id')
  @ApiOperation({ summary: 'Delete commande details' })
  @ApiResponse({
    status: 200,
    description: 'The commande details has been successfully deleted.',
  })
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.commandeDetailsService.remove(+id);
  }
}
