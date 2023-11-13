// src/user/user.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common'

import { Pagination } from 'nestjs-typeorm-paginate'

import { CreateUserDto } from '@/dto/create-user.dto'
import { PaginationDto } from '@/dto/pagination.dto'
import { QueryUserDto } from '@/dto/query-user.dto'

import { User } from './user.entity'

import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(@Query() query: PaginationDto & QueryUserDto): Promise<Pagination<User> | User[]> {
    return this.userService.findAll(query)
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(Number(id))
  }

  @Post()
  create(@Body() user: CreateUserDto): Promise<User> {
    return this.userService.create(user)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: CreateUserDto): Promise<User> {
    return this.userService.update(Number(id), user)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(Number(id))
  }
}
