import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('health', () => {
    it('should return the service health status', () => {
      const response = appController.getHealth();

      expect(response.status).toBe('ok');
      expect(response.uptime).toEqual(expect.any(Number));
      expect(response.timestamp).toEqual(expect.any(String));
      expect(Number.isNaN(Date.parse(response.timestamp))).toBe(false);
    });
  });
});
