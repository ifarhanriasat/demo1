import { ConfigurationModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { AppService } from './app.service';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ShopsModule } from './shops/shops.module';
import { ProductModule } from './products/products.module';
import { ShopProductModule } from './shop-products/shop-products.module';


@Module({
  imports: [
    DatabaseModule,
    ConfigurationModule,
    ShopsModule,
    ProductModule,
    ShopProductModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  }
}
