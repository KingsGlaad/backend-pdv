// prisma/seed.ts
import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcrypt';
import { PrismaClient, UserRole } from 'src/generated/prisma/client';

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Iniciando seed...');

  const adminEmail = 'admin@pdv.com';

  const adminExists = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (adminExists) {
    console.log('⚠️ Admin já existe, seed ignorada');
    return;
  }

  const passwordHash = await bcrypt.hash('admin123', 10);

  await prisma.user.create({
    data: {
      name: 'Administrador',
      email: adminEmail,
      password: passwordHash,
      role: UserRole.ADMIN,
      active: true,
    },
  });

  console.log('✅ Admin criado com sucesso');
}

main()
  .catch((e) => {
    console.error('❌ Erro na seed', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
