import { Module } from '@nestjs/common';
import { TodoQueryService } from './app.service';
import { TodoQueryController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoRepository } from 'src/todo/todo.repository';

@Module({
  imports : [TypeOrmModule.forFeature([TodoRepository])],
  providers: [TodoQueryService],
  controllers: [TodoQueryController]
})
export class TodoQueryModule {}
