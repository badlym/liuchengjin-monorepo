import { Order } from '@/order/order.entity';

// src/entities/user.entity.ts
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  sex: string;

  @Column()
  age: number;

  @Column()
  email: string;

  @OneToMany(() => Order, (order) => order.user, { cascade: true })
  orders: Order[];
}
