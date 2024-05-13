import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('API descriptions and usage instructions')
    .setVersion('1.0')
    .addBearerAuth({
      name: 'Authorization',
      type: 'http',
      in: 'Header',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apis', app, document);
  await app.listen(3000, () => {
    console.log(`Nest Application Started Successfully at 3000`);
  });
}
bootstrap();
