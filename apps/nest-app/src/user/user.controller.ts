import type { CreateUserDto } from '@/dto/create-user.dto';

import type { PaginationDto } from '@/dto/pagination.dto';

import type { QueryUserDto } from '@/dto/query-user.dto';
import type { Pagination } from 'nestjs-typeorm-paginate';
import type { User } from './user.entity';

import type { UserService } from './user.service';

// src/user/user.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(
    @Query() query: PaginationDto & QueryUserDto,
  ): Promise<Pagination<User> | User[]> {
    return this.userService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(Number(id));
  }

  @Post()
  create(@Body() user: CreateUserDto): Promise<User> {
    return this.userService.create(user);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: CreateUserDto): Promise<User> {
    return this.userService.update(Number(id), user);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(Number(id));
  }
}
