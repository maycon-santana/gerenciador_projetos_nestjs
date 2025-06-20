import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as exphbs from "express-handlebars";
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.useGlobalPipes(new ValidationPipe);
  app.setViewEngine('hbs');
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.engine(
    'hbs', 
    exphbs.engine({ 
      extname: 'hbs', 
      defaultLayout: 'main', 
      partialsDir: 'views/partials' 
    })
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
