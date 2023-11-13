// src/user/user.service.ts
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { paginate, Pagination } from 'nestjs-typeorm-paginate'
import { Repository } from 'typeorm'

import { CreateUserDto } from '@/dto/create-user.dto'
import { PaginationDto } from '@/dto/pagination.dto'
import { QueryUserDto } from '@/dto/query-user.dto'

import { User } from './user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(query: PaginationDto & QueryUserDto): Promise<Pagination<User> | User[]> {
    const queryOptions: QueryUserDto = {}
    if (query.name) {
      queryOptions.name = query.name
    }
    if (query.page && query.limit) {
      const { page = 1, limit = 10 } = query
      return paginate<User>(
        this.userRepository,
        { page, limit },
        {
          relations: ['orders'],
          where: queryOptions,
        },
      )
    }

    return this.userRepository.find({
      relations: ['orders'],
      where: queryOptions,
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async findOne(id: number): Promise<User> {
    // @ts-ignore
    return this.userRepository.findOne({
      where: { id },
      relations: ['orders'],
    })
  }

  async create(user: CreateUserDto): Promise<User> {
    return this.userRepository.save(user)
  }

  async update(id: number, user: CreateUserDto): Promise<User> {
    return this.userRepository.save({ ...user, id: Number(id) })
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id)
    await this.userRepository.delete(id)
  }
}
