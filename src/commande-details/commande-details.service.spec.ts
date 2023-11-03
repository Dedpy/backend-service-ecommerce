import { Test, TestingModule } from '@nestjs/testing';
import { CommandeDetailsService } from './commande-details.service';

describe('CommandeDetailsService', () => {
  let service: CommandeDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommandeDetailsService],
    }).compile();

    service = module.get<CommandeDetailsService>(CommandeDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
