import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //swagger configuration...
  const options = new DocumentBuilder()
    .setTitle('Jobs Api example')
    .setDescription('It will return jobs related data based on provided location')
    .setVersion('1.0')
    .addTag('jobs')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  // TODO: Make it configurable...
  const configService: ConfigService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}
bootstrap();
