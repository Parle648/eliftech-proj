import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

interface IUser {
  event_id: number,
  full_name: string,
  email: string,
  date_of_birth: Date,
  where_hear: string
}

export interface IFilter {
  event_id: number,
  full_name?: string,
  email?: string,
}

@Injectable()
export class UserService {
  constructor (private readonly database: DatabaseService) {}

  async create(createUserDto: IUser) {
    try {
      console.log(createUserDto);
      
      const user = await this.database.users.create({
        data: createUserDto
      })

      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll(filters: IFilter) {
    try {
      const users = await this.database.users.findMany({
        where: {...filters, event_id: +filters.event_id}
      })

      return users;
    } catch (error) {
      throw new Error(error)
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

}
