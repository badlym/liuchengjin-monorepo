// src/common/dto/pagination.dto.ts
import { IsInt, IsPositive } from 'class-validator'

export class PaginationDto {
  @IsInt()
  @IsPositive()
  page?: number

  @IsInt()
  @IsPositive()
  limit?: number
}
