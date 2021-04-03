import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodo } from '../dto/createTodo.dto';
import { UpdateTodo } from '../dto/updateTodo.dto';
import { TodoRepository } from './todo.repository';

@Injectable()
export class TodoService {
    constructor(
        private readonly todoRepository : TodoRepository
    ){}

    getTodoListAll() {
        return this.todoRepository.find(); // 생성된 투두리스트를 모두 가져온다
    }

    async getTodo(todo_id : number) {
        const todo =  await this.todoRepository.findOne(todo_id);//선택한 투두리스트를 가져온다.
        if(!todo){
            throw new NotFoundException({
                status: HttpStatus.NOT_FOUND,
                error: '존재하지 않는 TodoList',
              });
        }
        return todo;
    }

    async createTodo(todoData : CreateTodo) {
        await this.todoRepository.save(todoData);
        return '등록에 성공하였습니다.';
    }

    async updateTodo(todo_id : number, updateData : UpdateTodo){
        //todolist가 존재하는지
        await this.getTodo(todo_id); // async await가 비동기 처리라는거는 대략 알겠으나.. 여기서 왜 썼는지? if를 안쓴 이유? 수정된 내용이 없어도 다음 내용이 실행되는?

        await this.todoRepository.update(todo_id, updateData);
    }

    async deleteTodo(todo_id : number) {
        //todolist가 존재하는지
        await this.getTodo(todo_id);

        await this.todoRepository.delete(todo_id);
    }
}
