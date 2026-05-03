import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppController } from './../src/app.controller';
import { AppService } from './../src/app.service';
import type { HealthStatus } from './../src/app.service';

describe('Health endpoint (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api');
    await app.init();
  });

  it('/api/health (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/health')
      .expect(200)
      .expect((response) => {
        const body = response.body as HealthStatus;

        expect(body.status).toBe('ok');
        expect(body.uptime).toEqual(expect.any(Number));
        expect(body.timestamp).toEqual(expect.any(String));
        expect(Number.isNaN(Date.parse(body.timestamp))).toBe(false);
      });
  });

  afterEach(async () => {
    await app.close();
  });
});
