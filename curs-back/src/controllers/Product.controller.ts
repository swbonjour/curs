import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Product } from 'src/entities/Product.entity';
import { ProductService } from 'src/services/Product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAll(): Promise<Product[]> {
    return this.productService.getAll();
  }

  @Get(':id')
  getById(@Param() param: { id: string }): Promise<Product> {
    return this.productService.getById(param.id);
  }

  @Get('sum/amount')
  sumProduct(): Promise<number> {
    console.log(1);
    return this.productService.sumProduct();
  }

  @Post()
  buyProducts(@Body() dto: { id: string[] }): Promise<Product[]> {
    return this.productService.buyProduct(dto);
  }
}
