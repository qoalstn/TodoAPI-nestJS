import { PartialType } from "@nestjs/swagger";
import { IsDate } from "class-validator";
import { CreateTodo } from "./createTodo.dto";


export class UpdateTodo extends PartialType(CreateTodo) { // createTodo를 상속 받아서 유효성 검사, 데이터 삽입
    @IsDate() 
        readonly updateDate : Date;    
}