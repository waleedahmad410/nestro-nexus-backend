// src/modules/brands/brands.service.ts

import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
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
    try {
      await this.ensureSlugIsUnique(createBrandDto.slug);

      const brand = this.brandRepository.create({
        name: createBrandDto.name,
        slug: createBrandDto.slug,
        isActive: createBrandDto.isActive ?? true,
      });

      this.em.persist(brand);
      await this.em.flush();

      return brand;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findAll(): Promise<Brand[]> {
    try {
      return await this.brandRepository.findAll({
        orderBy: {
          createdAt: 'desc',
        },
      });
    } catch (error) {
      this.handleError(error);
    }
  }

  async findOne(id: string): Promise<Brand> {
    try {
      const brand = await this.brandRepository.findOne({ id });

      if (!brand) {
        throw new NotFoundException('Brand not found');
      }

      return brand;
    } catch (error) {
      this.handleError(error);
    }
  }

  async update(id: string, updateBrandDto: UpdateBrandDto): Promise<Brand> {
    try {
      const brand = await this.findOne(id);

      if (updateBrandDto.slug && updateBrandDto.slug !== brand.slug) {
        await this.ensureSlugIsUnique(updateBrandDto.slug);
      }

      this.brandRepository.assign(brand, updateBrandDto);

      await this.em.flush();

      return brand;
    } catch (error) {
      this.handleError(error);
    }
  }

  async remove(id: string): Promise<{ message: string }> {
    try {
      const brand = await this.findOne(id);

      // Recommended for ERP: soft delete instead of hard delete
      brand.isActive = false;

      await this.em.flush();

      return {
        message: 'Brand deleted successfully',
      };
    } catch (error) {
      this.handleError(error);
    }
  }

  private async ensureSlugIsUnique(slug: string): Promise<void> {
    const existingBrand = await this.brandRepository.findOne({ slug });

    if (existingBrand) {
      throw new ConflictException('Brand slug already exists');
    }
  }

  private handleError(error: unknown): never {
    if (
      error instanceof ConflictException ||
      error instanceof NotFoundException
    ) {
      throw error;
    }

    throw new InternalServerErrorException('Something went wrong');
  }
}
