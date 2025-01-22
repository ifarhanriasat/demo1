import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Shop } from '../../shops/entities/shop.entity';
import { Product } from '../../products/entities/product.entity';

@Entity('shop_products')
export class ShopProduct {
  @PrimaryGeneratedColumn('uuid')  // Unique ID for each ShopProduct record
  id: string;

  @ManyToOne(() => Shop, { eager: true })  // Establish the relation with Shop entity
  @JoinColumn({ name: 'shopId' })  // Specify the column name for foreign key
  shop: Shop;

  @ManyToOne(() => Product, { eager: true })  // Establish the relation with Product entity
  @JoinColumn({ name: 'productId' })  // Specify the column name for foreign key
  product: Product;
}
