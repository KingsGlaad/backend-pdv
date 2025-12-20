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

  const cashRegisters = [{ name: 'Caixa 1' }, { name: 'Caixa 2' }, { name: 'Caixa 3' }];

  for (const register of cashRegisters) {
    const exists = await prisma.cashRegister.findUnique({
      where: { name: register.name },
    });

    if (exists) {
      console.log(`⚠️ Caixa já existe: ${register.name}`);
      continue;
    }
    await prisma.cashRegister.create({
      data: {
        name: register.name,
      },
    });
    console.log(`✅ Caixa criado: ${register.name}`);
  }

  const products = [
    {
      code: '001',
      name: 'Costela Bovina Assada',
      price: 120.0,
      description: 'Costela bovina assada na brasa por 12 horas.',
      category: 'Carnes',
    },
    {
      code: '002',
      name: 'Costela Suína BBQ',
      price: 85.0,
      description: 'Costela suína com molho barbecue artesanal.',
      category: 'Carnes',
    },
    {
      code: '003',
      name: 'Picanha na Chapa',
      price: 150.0,
      description: 'Picanha grelhada servida na chapa com alho.',
      category: 'Carnes',
    },
    {
      code: '010',
      name: 'Arroz Branco',
      price: 15.0,
      description: 'Porção de arroz branco soltinho.',
      category: 'Acompanhamentos',
    },
    {
      code: '011',
      name: 'Feijão Tropeiro',
      price: 22.0,
      description: 'Feijão tropeiro tradicional mineiro.',
      category: 'Acompanhamentos',
    },
    {
      code: '012',
      name: 'Batata Frita',
      price: 25.0,
      description: 'Batata frita crocante, porção generosa.',
      category: 'Porções',
    },
    {
      code: '020',
      name: 'Coca-Cola Lata',
      price: 6.0,
      description: 'Refrigerante lata 350ml.',
      category: 'Bebidas',
    },
    {
      code: '021',
      name: 'Cerveja Heineken Long Neck',
      price: 12.0,
      description: 'Cerveja Heineken 330ml.',
      category: 'Bebidas',
    },
    {
      code: '022',
      name: 'Água com Gás',
      price: 5.0,
      description: 'Água mineral com gás 500ml.',
      category: 'Bebidas',
    },
    {
      code: '030',
      name: 'Pudim de Leite',
      price: 18.0,
      description: 'Pudim de leite condensado caseiro.',
      category: 'Sobremesa',
    },
  ];

  for (const product of products) {
    const exists = await prisma.product.findUnique({
      where: { code: product.code },
    });

    if (exists) {
      console.log(`⚠️ Produto já existe: ${product.name}`);
      continue;
    }

    await prisma.product.create({
      data: {
        code: product.code,
        name: product.name,
        price: product.price,
        description: product.description,
        category: product.category,
      },
    });

    console.log(`✅ Produto criado: ${product.name}`);
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
