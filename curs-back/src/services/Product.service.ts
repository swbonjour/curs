import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/Product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { BoughtProduct } from 'src/entities/BoughtProduct.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,

    @InjectRepository(BoughtProduct)
    private boughtProductRepository: Repository<BoughtProduct>,
  ) {}

  async getAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async getById(id: string): Promise<Product> {
    return await this.productRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async buyProduct(dto: { id: string[] }): Promise<BoughtProduct[]> {
    const products = await this.productRepository.find({
      where: {
        id: In(dto.id),
      },
    });

    for (const product of products) {
      const res = await this.boughtProductRepository.create({
        id: uuidv4(),
        name: product.name,
        description: product.description,
        price: product.price,
        img: product.img,
        user: null,
      });

      console.log(res);

      await this.boughtProductRepository.save(res);
    }

    return products;
  }

  async sumProduct(): Promise<number> {
    const products = await this.boughtProductRepository.find({});

    const prices = products.map((p) => Number(p.price));

    console.log(products);
    return prices.reduce((p, c) => p + c, 0);
  }
}
