import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodo } from 'src/dto/createTodo.dto';
import { UpdateTodo } from 'src/dto/updateTodo.dto';
import { TodoRepository } from 'src/todo/todo.repository';

@Injectable()
export class TodoQueryService {
  constructor(private readonly todoRepository: TodoRepository) {}

  getTodoListAll() {
    return this.todoRepository
    .createQueryBuilder()
    .getMany();
  }

  async getTodo(todo_id: number) {
    const todo = await this.todoRepository
      .createQueryBuilder()
      .where('todo_id = :todo_id', { todo_id })
      .getOne();

    if (!todo) {
      throw new NotFoundException({
        status: HttpStatus.NOT_FOUND,
        error: '존재하지 않는 TodoList',
      });
    }
    return todo;
  }

  async createTodo(todoData: CreateTodo) {
    return this.todoRepository
      .createQueryBuilder()
      .insert()
      .values([
        {
          todo_title: todoData.todo_title,
          todo_content: todoData.todo_content,
        },
      ])
      .execute();
  }

  async updateTodo(todo_id: number, updateData: UpdateTodo) {
    //todolist가 존재하는지
    await this.getTodo(todo_id);

    await this.todoRepository
      .createQueryBuilder()
      .update()
      .set({
        todo_title: updateData.todo_title,
        todo_content: updateData.todo_content,
      })
      .where('todo_id = :todo_id', { todo_id })
      .execute();
  }
  
  async deleteTodo(todo_id: number) {
    //todolist가 존재하는지
    await this.getTodo(todo_id);

    await this.todoRepository
      .createQueryBuilder()
      .delete()
      .where('todo_id = :todo_id', { todo_id })
      .execute();
  }
}

