import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/users.entity';


@Injectable()
export class ApiService {
  constructor(
  @InjectRepository(Users)
  private usersRepository : Repository<Users>
  ){};

  private users : Users[] = [];

  findAll() : Promise<Users[]> {
  
    const users = this.usersRepository.find();
    
    if(!users){
      throw new NotFoundException("데이터가 존재하지 않습니다.");
    }
    
    return users;
  }
}
