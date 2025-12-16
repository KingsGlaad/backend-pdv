import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { PrismaService } from '../src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

describe('CashModule (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  let authToken: string;
  let cashRegisterId: string;
  let sessionId: string;
  let userId: string;

  // Dados para o teste
  const testUser = {
    email: 'test_cash_e2e@example.com',
    password: 'password123',
    name: 'Test Cash User',
  };

  const testRegister = {
    name: 'Caixa E2E 01',
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe()); // Importante para validar DTOs
    await app.init();

    prisma = app.get<PrismaService>(PrismaService);

    // 1. Limpeza e Setup do Banco de Dados
    // Remover dados antigos para evitar conflitos
    await prisma.cashMovement.deleteMany();
    await prisma.sale.deleteMany(); // Se houver relação
    await prisma.cashSession.deleteMany();
    await prisma.cashRegister.deleteMany({ where: { name: testRegister.name } });
    await prisma.user.deleteMany({ where: { email: testUser.email } });

    // 2. Criar Usuário
    const hashedPassword = await bcrypt.hash(testUser.password, 10);
    const user = await prisma.user.create({
      data: {
        email: testUser.email,
        password: hashedPassword,
        name: testUser.name,
        role: 'ADMIN',
      },
    });
    userId = user.id;

    // 3. Criar Caixa
    const register = await prisma.cashRegister.create({
      data: { name: testRegister.name },
    });
    cashRegisterId = register.id;

    // 4. Login para pegar o Token
    const loginResponse = await request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: testUser.email,
        password: testUser.password,
      })
      .expect(201);

    authToken = loginResponse.body.access_token;
  });

  afterAll(async () => {
    // Limpeza final (opcional)
    await prisma.cashMovement.deleteMany();
    await prisma.cashSession.deleteMany();
    await prisma.cashRegister.deleteMany({ where: { name: testRegister.name } });
    await prisma.user.deleteMany({ where: { email: testUser.email } });
    await app.close();
  });

  describe('Fluxo de Caixa', () => {
    it('/cash/status (GET) - Deve retornar fechado inicialmente', () => {
      return request(app.getHttpServer())
        .get('/cash/status')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200)
        .expect((res) => {
          expect(res.body.isOpen).toBe(false);
          expect(res.body.session).toBeNull();
        });
    });

    it('/cash/open (POST) - Deve abrir o caixa', async () => {
      const response = await request(app.getHttpServer())
        .post('/cash/open')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          cashRegisterId: cashRegisterId,
          initialBalance: 100.0,
        })
        .expect(201);

      sessionId = response.body.id;
      expect(response.body.status).toBe('OPEN');
      expect(Number(response.body.initialBalance)).toBe(100);
    });

    it('/cash/status (GET) - Deve retornar aberto agora', () => {
      return request(app.getHttpServer())
        .get('/cash/status')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200)
        .expect((res) => {
          expect(res.body.isOpen).toBe(true);
          expect(res.body.session.id).toBe(sessionId);
        });
    });

    it('/cash/movement (POST) - Suprimento', () => {
      return request(app.getHttpServer())
        .post('/cash/movement')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          sessionId: sessionId,
          type: 'SUPPLY',
          amount: 50.0,
          reason: 'Troco extra',
        })
        .expect(201)
        .expect((res) => {
          expect(res.body.type).toBe('SUPPLY');
          expect(Number(res.body.amount)).toBe(50);
        });
    });

    it('/cash/movement (POST) - Sangria', () => {
      return request(app.getHttpServer())
        .post('/cash/movement')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          sessionId: sessionId,
          type: 'BLEED',
          amount: 20.0,
          reason: 'Pagamento rápido',
        })
        .expect(201)
        .expect((res) => {
          expect(res.body.type).toBe('BLEED');
          expect(Number(res.body.amount)).toBe(20);
        });
    });

    it('/cash/close (POST) - Deve fechar o caixa e calcular diferença', async () => {
      // Cálculo esperado:
      // Inicial (100) + Suprimento (50) - Sangria (20) = 130
      // Se informarmos 130, a diferença deve ser 0.

      const response = await request(app.getHttpServer())
        .post('/cash/close')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          sessionId: sessionId,
          finalBalance: 130.0,
        })
        .expect(201);

      expect(response.body.status).toBe('CLOSED');
      expect(response.body.closedAt).toBeDefined();
      expect(Number(response.body.systemBalance)).toBe(130);
      expect(Number(response.body.difference)).toBe(0);
    });

    it('/cash/status (GET) - Deve retornar fechado novamente', () => {
      return request(app.getHttpServer())
        .get('/cash/status')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200)
        .expect((res) => {
          expect(res.body.isOpen).toBe(false);
        });
    });
  });
});
