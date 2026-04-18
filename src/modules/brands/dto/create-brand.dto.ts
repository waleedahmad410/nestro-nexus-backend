// src/modules/brands/dto/create-brand.dto.ts

import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateBrandDto {
  @IsString()
  @MaxLength(120)
  name!: string;

  @IsString()
  @MaxLength(160)
  slug!: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}