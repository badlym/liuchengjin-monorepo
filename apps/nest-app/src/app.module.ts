// src/app.module.ts
import { Module } from '@nestjs/common'

import { TypeOrmModule } from '@nestjs/typeorm'

import { OrderController } from '@/order/order.controller'

import { Order } from '@/order/order.entity'
import { OrderService } from '@/order/order.service'

import { UserController } from './user/user.controller'
import { User } from './user/user.entity'
import { UserService } from './user/user.service'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // @ts-ignore
      type: 'sqlite',
      database: './database/database.sqlite',
      entities: [User, Order],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Order]),
  ],
  providers: [UserService, OrderService],
  controllers: [UserController, OrderController],
})
export class AppModule {}
