import { Test, TestingModule } from '@nestjs/testing';
import { CommandeDetailsController } from './commande-details.controller';
import { CommandeDetailsService } from './commande-details.service';

describe('CommandeDetailsController', () => {
  let controller: CommandeDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommandeDetailsController],
      providers: [CommandeDetailsService],
    }).compile();

    controller = module.get<CommandeDetailsController>(CommandeDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
