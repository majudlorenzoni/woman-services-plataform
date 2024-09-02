async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Woman Service API')
    .setDescription('Conectando clientes com prestadoras de serviços')
    .setVersion('1.0')
    .addTag('servicos')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Use o valor da variável de ambiente PORT ou 3000 por padrão
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();


