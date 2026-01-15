import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// Remova ou comente as importações do MicroserviceOptions se não for usar
// import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.enableCors({
    // Na Vercel, a origem muda. É bom permitir tudo '*' ou o seu domínio de frontend
    origin: '*', 
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });

  // --- BLOCO COMENTADO PARA A VERCEL ---
  // A Vercel não suporta Kafka Consumers de longa duração.
  // Se descomentar isto na Vercel, a função vai dar timeout e erro 504.
  /*
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [process.env.KAFKA_BROKER || 'localhost:9092'],
      },
      consumer: {
        groupId: 'pdv-backend-consumer',
      },
    },
  });
  await app.startAllMicroservices();
  */
  // -------------------------------------

  const config = new DocumentBuilder()
    .setTitle('Costela API')
    .setDescription('The Costela API description')
    .setVersion('1.0')
    .addTag('costela')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();