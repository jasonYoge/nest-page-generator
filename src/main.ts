import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const result = await app.listen(3000);
  
  if (result) {
    console.log('Server start success at port :3000...');
  }
}
bootstrap();
