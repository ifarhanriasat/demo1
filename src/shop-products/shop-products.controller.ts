import { Controller, Post, Body, Get } from '@nestjs/common';
import { ShopProductService } from './shop-products.service';
import { StoreProductDto } from './dto/create-shop-product.dto';
import { PurchaseProductDto } from './dto/purchase-product.dto';
import { ShopProduct } from './entities/shop-product.entity';
import { Web3Service } from '../web3/web3.service';
import { ethers } from 'ethers';

@Controller('')
export class ShopProductController {
  constructor(
    private readonly shopProductService: ShopProductService,
    private readonly web3Service: Web3Service
  ) {}

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

  // Purchase a product from specific shop
  @Post('/purchase-product')
  async purchaseProduct(
    @Body() purchaseProductDto: PurchaseProductDto,
  ): Promise<any> {
    return this.web3Service.purchaseItem(purchaseProductDto);
  }

  // get balance
  @Post('/get-balance')
  async getBalance(
    @Body('address') address: string,
  ): Promise<any> {
    return this.web3Service.getBalance(address);
  }
}
