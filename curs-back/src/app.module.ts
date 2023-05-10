import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DBConfig } from './db/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './modules/Product.module';
import { UserModule } from './modules/User.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(new DBConfig().config),
    ProductModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
