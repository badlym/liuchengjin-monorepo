// src/entities/user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

import { Order } from '@/order/order.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  sex: string

  @Column()
  age: number

  @Column()
  email: string

  @OneToMany(() => Order, (order) => order.user, { cascade: true })
  orders: Order[]
}
