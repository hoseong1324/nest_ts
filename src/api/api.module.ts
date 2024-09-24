import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';


@Module({
  imports : [TypeOrmModule.forFeature([Users])],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
