import { PartialType } from '@nestjs/mapped-types';
import { CreateCommandeDetailDto } from './create-commande-detail.dto';

export class UpdateCommandeDetailDto extends PartialType(CreateCommandeDetailDto) {}
