import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './products.service';
import { Product } from './entities/product.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // Get all products
  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  // Get a product by ID
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Product> {
    return this.productService.findOne(id);
  }

 
}
