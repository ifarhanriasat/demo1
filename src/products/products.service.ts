import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}


  // Find all products
  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  // Find a product by ID
  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({where: { id }});
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

 
}
