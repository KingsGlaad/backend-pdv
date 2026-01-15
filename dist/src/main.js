"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.enableCors({
        origin: ['http://localhost:3000', 'http://192.168.0.5:3000'],
        credentials: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    });
    app.connectMicroservice({
        transport: microservices_1.Transport.KAFKA,
        options: {
            client: {
                brokers: [process.env.KAFKA_BROKERS],
            },
            consumer: {
                groupId: 'pdv-backend-consumer',
            },
        },
    });
    await app.startAllMicroservices();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Costela API')
        .setDescription('The Costela API description')
        .setVersion('1.0')
        .addTag('costela')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT || 3333);
}
bootstrap();
//# sourceMappingURL=main.js.map