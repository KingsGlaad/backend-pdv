// prisma/seed.ts
import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcrypt';
import { PrismaClient, UserRole } from 'src/generated/prisma/client';

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Iniciando seed...');

  const passwordHash = await bcrypt.hash('123456', 10);

  const users = [
    {
      name: 'Administrador',
      email: 'admin@pdv.com',
      role: UserRole.ADMIN,
    },
    {
      name: 'Gerente',
      email: 'gerente@pdv.com',
      role: UserRole.MANAGER,
    },
    {
      name: 'Caixa',
      email: 'caixa@pdv.com',
      role: UserRole.CASHIER,
    },
    {
      name: 'Garçom',
      email: 'garcom@pdv.com',
      role: UserRole.WAITER,
    },
  ];

  for (const user of users) {
    const exists = await prisma.user.findUnique({
      where: { email: user.email },
    });

    if (exists) {
      console.log(`⚠️ Usuário ${user.role} já existe: ${user.email}`);
      continue;
    }

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: passwordHash,
        role: user.role,
        active: true,
      },
    });

    console.log(`✅ Usuário ${user.role} criado: ${user.email}`);
  }
}

main()
  .catch((e) => {
    console.error('❌ Erro na seed', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
