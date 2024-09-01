import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Verifica se o ambiente é de desenvolvimento
  const isDev = process.env.NODE_ENV !== 'production';

  if (isDev) {
    // Configuração do Swagger apenas em ambientes de desenvolvimento
    const config = new DocumentBuilder()
      .setTitle('API')
      .setDescription('The API description')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }

  // Inicia o servidor na porta especificada ou na porta 3000 por padrão
  await app.listen(process.env.PORT || 3000);
}

bootstrap();
