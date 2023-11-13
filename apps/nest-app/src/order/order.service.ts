// src/order/order.service.ts
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { paginate, Pagination } from 'nestjs-typeorm-paginate'
import { Repository } from 'typeorm'

import { CreateOrderDto } from '@/dto/create-order.dto'
import { PaginationDto } from '@/dto/pagination.dto'
import { QueryOrderDto } from '@/dto/query-order.dto'

import { User } from '@/user/user.entity' // 请根据实际路径调整

import { Order } from './order.entity'

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(query?: PaginationDto & QueryOrderDto): Promise<Pagination<Order> | Order[]> {
    const queryOptions: QueryOrderDto = {}
    if (query?.orderName) {
      queryOptions.orderName = query.orderName
    }
    if (query?.user) {
      queryOptions.user = query.user
    }

    if (query?.page && query?.limit) {
      const { page = 1, limit = 10 } = query
      return paginate<Order>(
        this.orderRepository,
        { page, limit },
        {
          relations: ['user'],
          where: queryOptions,
        },
      )
    }
    return this.orderRepository.find({
      relations: ['user'],
    })
  }

  async findOne(id: number): Promise<Order> {
    const order = await this.orderRepository.findOne({
      where: { id },
      relations: ['user'],
    })

    if (!order) {
      throw new NotFoundException('Order not found')
    }

    return order
  }

  async create(order: CreateOrderDto): Promise<Order> {
    console.log(order, '这是传过来的订单信息')
    const user = await this.userRepository.findOne({
      where: { id: order.user.id },
    })
    console.log(user, '这是查询出来的用户列表')

    if (!user) {
      throw new NotFoundException('User not found')
    }
    // const orderEntity = new Order()
    // orderEntity.orderName = order.orderName
    // orderEntity.user = user
    // orderEntity.orderDetails = order.orderDetails
    // orderEntity.userId = order.userId
    return this.orderRepository.save({
      ...order,
      user,
    })
  }

  async update(id: number, order: Order): Promise<Order> {
    return this.orderRepository.save({ ...order, id: Number(id) })
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id)
    await this.orderRepository.delete(id)
  }
}
