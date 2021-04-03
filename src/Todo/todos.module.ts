import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoController } from './todos.controllers';
import { TodoRepository } from './todo.repository';
import { TodoService } from './todos.service';

@Module({
  imports : [TypeOrmModule.forFeature([TodoRepository])],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}