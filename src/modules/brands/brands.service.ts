// src/modules/brands/brands.service.ts

import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';

import { Brand } from './entities/brand.entity';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: EntityRepository<Brand>,

    private readonly em: EntityManager,
  ) {}

  async create(createBrandDto: CreateBrandDto): Promise<Brand> {
    const existingBrand = await this.brandRepository.findOne({
      slug: createBrandDto.slug,
    });

    if (existingBrand) {
      throw new ConflictException('Brand slug already exists');
    }

    const brand = this.brandRepository.create({
      name: createBrandDto.name,
      slug: createBrandDto.slug,
      isActive: createBrandDto.isActive ?? true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this.em.persist(brand);

    return brand;
  }

  async findAll(): Promise<Brand[]> {
    return this.brandRepository.findAll({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: string): Promise<Brand> {
    const brand = await this.brandRepository.findOne({ id });

    if (!brand) {
      throw new NotFoundException('Brand not found');
    }

    return brand;
  }

  async update(id: string, updateBrandDto: UpdateBrandDto): Promise<Brand> {
    const brand = await this.findOne(id);

    if (updateBrandDto.slug && updateBrandDto.slug !== brand.slug) {
      const existingBrand = await this.brandRepository.findOne({
        slug: updateBrandDto.slug,
      });

      if (existingBrand) {
        throw new ConflictException('Brand slug already exists');
      }
    }

    if (updateBrandDto.name !== undefined) {
      brand.name = updateBrandDto.name;
    }

    if (updateBrandDto.slug !== undefined) {
      brand.slug = updateBrandDto.slug;
    }

    if (updateBrandDto.isActive !== undefined) {
      brand.isActive = updateBrandDto.isActive;
    }

    await this.em.flush();

    return brand;
  }

  async remove(id: string): Promise<{ message: string }> {
    const brand = await this.findOne(id);

    await this.em.remove(brand);

    return {
      message: 'Brand deleted successfully',
    };
  }
}