import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateTodo {
  @IsString() 
  @IsNotEmpty() 
  readonly todo_title : string; 

  @IsString()
  @IsNotEmpty()
  readonly todo_content : string;

  @IsDate()
  readonly regdate : Date;
}