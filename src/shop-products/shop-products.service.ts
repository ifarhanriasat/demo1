import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShopProduct } from './entities/shop-product.entity';
import { Shop } from '../shops/entities/shop.entity';
import { Product } from '../products/entities/product.entity';
import { StoreProductDto } from './dto/create-shop-product.dto';


@Injectable()
export class ShopProductService {
  constructor(
    @InjectRepository(ShopProduct)
    private readonly shopProductRepository: Repository<ShopProduct>,
    @InjectRepository(Shop)
    private readonly shopRepository: Repository<Shop>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  // Get all product names with their associated shop names
  async getProductsAndShops(): Promise<any[]> {
    const shopProducts = await this.shopProductRepository.find({
      relations: ['shop', 'product'],
    });

    return shopProducts.map((shopProduct) => ({
      product_name: shopProduct.product.name,
      shop_name: shopProduct.shop.name,
    }));
  }

  // Store a new product in a specific shop
  async storeProduct(storeProductDto: StoreProductDto): Promise<ShopProduct> {
    const { shopId, name, price } = storeProductDto;

    // Validate that the shop exists
    const shop = await this.shopRepository.findOne({where: {id: shopId}});
    if (!shop) {
      throw new NotFoundException(`Shop with ID ${shopId} not found`);
    }

    // Create the new product
    const product = this.productRepository.create({
      name,
      price,
    });
    await this.productRepository.save(product);

    // Create the ShopProduct association
    const shopProduct = this.shopProductRepository.create({
      shop,
      product,
    });
    return await this.shopProductRepository.save(shopProduct);
  }
}
