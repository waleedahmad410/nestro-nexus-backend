// src/modules/brands/dto/update-brand.dto.ts

import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateBrandDto {
  @IsOptional()
  @IsString()
  @MaxLength(120)
  name?: string;

  @IsOptional()
  @IsString()
  @MaxLength(160)
  slug?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}