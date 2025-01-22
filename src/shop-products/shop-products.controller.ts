import { Controller, Post, Body, Get } from '@nestjs/common';
import { ShopProductService } from './shop-products.service';
import { StoreProductDto } from './dto/create-shop-product.dto';
import { ShopProduct } from './entities/shop-product.entity';

@Controller('')
export class ShopProductController {
  constructor(private readonly shopProductService: ShopProductService) {}

  // Get all product names with their associated shop names
  @Get('/products-and-shops')
  async getProductsAndShops() {
    return this.shopProductService.getProductsAndShops();
  }

  // Store a new product in a specific shop
  @Post('/store-product')
  async storeProduct(
    @Body() storeProductDto: StoreProductDto,
  ): Promise<ShopProduct> {
    return this.shopProductService.storeProduct(storeProductDto);
  }
}
