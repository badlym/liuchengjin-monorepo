// src/order/order.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common'

import { Pagination } from 'nestjs-typeorm-paginate'

import { CreateOrderDto } from '@/dto/create-order.dto'
import { PaginationDto } from '@/dto/pagination.dto'
import { QueryOrderDto } from '@/dto/query-order.dto'

import { Order } from './order.entity'
import { OrderService } from './order.service'

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  findAll(@Query() query: PaginationDto & QueryOrderDto): Promise<Pagination<Order> | Order[]> {
    return this.orderService.findAll(query)
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Order> {
    return this.orderService.findOne(Number(id))
  }

  @Post()
  create(@Body() order: CreateOrderDto): Promise<Order> {
    return this.orderService.create(order)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() order: Order): Promise<Order> {
    return this.orderService.update(Number(id), order)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.orderService.remove(Number(id))
  }
}
