import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'

import { User } from '@/user/user.entity'

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  orderName: string

  @Column()
  orderDetails: string

  userId: number

  @ManyToOne(() => User, (user) => user.orders, {
    onDelete: 'CASCADE', // <---- HERE
  })
  @JoinColumn({ name: 'userId' })
  user: User
}
