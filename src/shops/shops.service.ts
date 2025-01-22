import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shop } from './entities/shop.entity';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(Shop)
    private readonly shopRepository: Repository<Shop>,
  ) {}

  // Create a new shop
  async create(createShopDto: CreateShopDto): Promise<Shop> {
    const shop = this.shopRepository.create(createShopDto);
    return await this.shopRepository.save(shop);
  }

  // Find all shops
  async findAll(): Promise<Shop[]> {
    return await this.shopRepository.find();
  }

  // Find a shop by ID
  async findOne(id: number): Promise<Shop> {
    const shop = await this.shopRepository.findOne({ where: { id } });
    if (!shop) {
      throw new NotFoundException(`Shop with ID ${id} not found`);
    }
    return shop;
  }


  // Update a shop
  async update(id: number, updateShopDto: UpdateShopDto): Promise<Shop> {
    await this.findOne(id); // Ensure shop exists
    await this.shopRepository.update(id, updateShopDto);
    return this.findOne(id);
  }


}
