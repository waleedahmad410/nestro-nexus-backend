// src/modules/brands/brands.controller.ts

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@ApiTags('brands')
@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a brand' })
  @ApiCreatedResponse({ type: Brand })
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandsService.create(createBrandDto);
  }

  @Get()
  @ApiOperation({ summary: 'List brands' })
  @ApiOkResponse({ type: Brand, isArray: true })
  findAll() {
    return this.brandsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a brand by ID' })
  @ApiOkResponse({ type: Brand })
  @ApiNotFoundResponse({ description: 'Brand not found' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.brandsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a brand' })
  @ApiOkResponse({ type: Brand })
  @ApiNotFoundResponse({ description: 'Brand not found' })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateBrandDto: UpdateBrandDto,
  ) {
    return this.brandsService.update(id, updateBrandDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a brand' })
  @ApiOkResponse({
    description: 'Brand deleted successfully',
    schema: {
      example: {
        message: 'Brand deleted successfully',
      },
    },
  })
  @ApiNotFoundResponse({ description: 'Brand not found' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.brandsService.remove(id);
  }
}
