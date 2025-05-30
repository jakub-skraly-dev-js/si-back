import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { CorsModule } from '@nestjs/common';

/*async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();*/

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para todos los dominios
  app.enableCors();

  const port = process.env.PORT || 3004;

  await app.listen(port, '0.0.0.0');
}
bootstrap();