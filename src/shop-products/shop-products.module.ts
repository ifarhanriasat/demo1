import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopProduct } from './entities/shop-product.entity';
import { ShopProductService } from './shop-products.service';
import { ShopProductController } from './shop-products.controller';
import { ShopsModule } from '../shops/shops.module';  // Import the Shop module
import { ProductModule } from '../products/products.module';  // Import the Product module
import { Shop } from 'src/shops/entities/shop.entity';
import { Product } from 'src/products/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ShopProduct, Shop, Product]),  // Register the ShopProduct entity
    ShopsModule,  // Import ShopModule to access the Shop service
    ProductModule,  // Import ProductModule to access the Product service
  ],
  controllers: [ShopProductController],  // Register the controller
  providers: [ShopProductService],  // Register the service
})
export class ShopProductModule {}
