import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop } from './entities/shop.entity';
import { ShopService } from './shops.service';
import { ShopController } from './shops.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Shop])],
  controllers: [ShopController],
  providers: [ShopService],
  exports: [ShopService],  // Export the service to be used in other modules

})
export class ShopsModule {}
