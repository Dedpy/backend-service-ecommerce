import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    return this.productRepository.save(createProductDto);
  }

  async findAll(): Promise<Product[]> {
    try {
      return await this.productRepository.find({});
    } catch (err) {
      return err;
    }
  }

  async findOne(id: number): Promise<Product> {
    try {
      return await this.productRepository.findOneBy({ id });
    } catch (err) {
      return err;
    }
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product | undefined> {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      return undefined;
    }
    this.productRepository.merge(product, updateProductDto);
    return this.productRepository.save(product);
  }

  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
