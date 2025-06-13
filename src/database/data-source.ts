import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { join } from 'path';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjs-pp',
      entities: [join(__dirname, '..', '**/*.entity.{ts,js}')],
      migrations: [join(__dirname, 'migrations/*.{ts,js}')],
      synchronize: false,
      namingStrategy: new SnakeNamingStrategy(),
    };
  }
}
