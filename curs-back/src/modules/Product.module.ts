import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from 'src/controllers/Product.controller';
import { BoughtProduct } from 'src/entities/BoughtProduct.entity';
import { Product } from 'src/entities/Product.entity';
import { ProductService } from 'src/services/Product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, BoughtProduct])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
