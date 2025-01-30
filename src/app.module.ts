import { ConfigurationModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { AppService } from './app.service';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ShopsModule } from './shops/shops.module';
import { ProductModule } from './products/products.module';
import { ShopProductModule } from './shop-products/shop-products.module';
import { Web3Module } from './web3/web3.module';


@Module({
  imports: [
    DatabaseModule,
    ConfigurationModule,
    ShopsModule,
    ProductModule,
    ShopProductModule,
    Web3Module,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  }
}
