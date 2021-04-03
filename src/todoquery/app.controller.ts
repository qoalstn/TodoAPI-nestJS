import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTodo } from 'src/dto/createTodo.dto';
import { UpdateTodo } from 'src/dto/updateTodo.dto';
import { TodoQueryService } from './app.service';

@Controller('todo-query')
export class TodoQueryController {
    constructor(private todoQueryService : TodoQueryService){}

    //todoList 조회
  @Get('/')
  async getTodoListAll() {
    return await this.todoQueryService.getTodoListAll();
  }

  //todoList 선택 조회
  @Get('/:todo_id')
  async getTodo(@Param('todo_id') todo_id: number) {
    return await this.todoQueryService.getTodo(todo_id);
  }

  //todoList 등록
  @Post('/new')
  async createTodo(@Body() todoData: CreateTodo) {
    await this.todoQueryService.createTodo(todoData);
  }

  //todoList 수정
  @Patch('/new/:todo_id')
  async updateTodo(
    @Param('todo_id') todo_id: number,
    @Body() updateData: UpdateTodo,
  ) {
    await this.todoQueryService.updateTodo(todo_id, updateData);
  }

  @Delete('/:todo_id')
  async deleteTodo(@Param('todo_id') todo_id: number) {
    await this.todoQueryService.deleteTodo(todo_id);
  }
}




// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }
