import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiService } from './api.service';
import { Users } from './entities/users.entity'


@Controller('api')
export class ApiController {
  constructor(private readonly apiService : ApiService) {}


  @Get() 
  findAll() : Promise<Users[]> {
    return this.apiService.findAll();
  }
}
