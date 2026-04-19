// src/modules/brands/dto/create-brand.dto.ts

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateBrandDto {
  @ApiProperty({
    example: 'Acme Foods',
    maxLength: 120,
  })
  @IsString()
  @MaxLength(120)
  name!: string;

  @ApiProperty({
    example: 'acme-foods',
    maxLength: 160,
  })
  @IsString()
  @MaxLength(160)
  slug!: string;

  @ApiPropertyOptional({
    default: true,
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
