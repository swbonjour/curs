import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/Product.entity';
import { User } from 'src/entities/User.entity';
import { BoughtProduct } from 'src/entities/BoughtProduct.entity';

@Injectable()
export class DBConfig {
  public config: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [User, Product, BoughtProduct],
    synchronize: true,
  };
}
