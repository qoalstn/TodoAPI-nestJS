import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTodo } from '../dto/createTodo.dto';
import { UpdateTodo } from '../dto/updateTodo.dto';
import { TodoService } from './todos.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  //todoList 조회
  @Get('/')
  async getTodoListAll() {
    return await this.todoService.getTodoListAll();    
  }

  //todoList 선택 조회
  @Get('/:todo_id')
  async getTodo(@Param('todo_id') todo_id: number) {
    return await this.todoService.getTodo(todo_id);
  }

  //todoList 등록
  @Post('/')
  async createTodo(@Body() todoData: CreateTodo) {
    return await this.todoService.createTodo(todoData);
  }

  //todoList 수정
  @Patch('/:todo_id')
  async updateTodo(
    @Param('todo_id') todo_id: number,
    @Body() updateData: UpdateTodo,
  ) {
    await this.todoService.updateTodo(todo_id, updateData);
  }

  //todoList 삭제
  @Delete('/:todo_id')
  async deleteTodo(@Param('todo_id') todo_id: number) {
    await this.todoService.deleteTodo(todo_id);
  }
}


















// import {
//   Controller,
//   Get,
//   Body,
//   Post,
//   Param,
//   Delete,
//   Patch,
// } from '@nestjs/common';
// import { CreateTodo } from '../Todo/dto/createTodo.dto';
// import { UpdateTodo } from '../Todo/dto/updateTodo.dto';
// import { TodoService } from './todos.service';

// @Controller('todos')
// export class TodoController {
//   constructor(private readonly todoService: TodoService) {}

//   @Get()
//   getAllTodos(): any {
//     return this.todoService.getTodoListAll();
//   }
//   @Post()
//   addTodo(
//     @Body('title') todoTitle: string,
//     @Body('description') todoDescription: string,
//   ): any {
//     return this.todoService.create(todoTitle, todoDescription);
//   }

//   @Get(':id')
//   getTodoById(@Param('id') todoId: string): any {
//     return this.todoService.findOne(todoId);
//   }
//   @Delete(':id')
//   deleteTodoById(@Param('id') todoId: string): any {
//     return this.todoService.deleteById(todoId);
//   }
//   @Patch(':id')
//   updateTodoById(
//     @Param('id') todoId: string,
//     @Body('title') todoTitle: string,
//     @Body('description') todoDescription: string,
//   ): any {
//     return this.todoService.UpdateById(todoId, todoTitle, todoDescription);
//   }
// }

