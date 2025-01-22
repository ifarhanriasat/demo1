import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ShopService } from './shops.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { Shop } from './entities/shop.entity';

@Controller('shops')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  // Create a new shop
  @Post()
  create(@Body() createShopDto: CreateShopDto): Promise<Shop> {
    return this.shopService.create(createShopDto);
  }

  // Get all shops
  @Get()
  findAll(): Promise<Shop[]> {
    return this.shopService.findAll();
  }

  // Get a shop by ID
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Shop> {
    return this.shopService.findOne(id);
  }

  // Update a shop
  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateShopDto: UpdateShopDto,
  ): Promise<Shop> {
    return this.shopService.update(id, updateShopDto);
  }

}
