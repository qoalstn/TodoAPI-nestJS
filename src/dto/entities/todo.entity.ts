import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"; 

//create table?
@Entity({name : 'todoList'}) 
    export class TodoEntity {
        @PrimaryGeneratedColumn() 
        todo_id : number; 
    
        @Column('varchar', {unique : true, length : 100})
        todo_title : string;
    
        @Column({type : 'text'})
        todo_content : string;
    
        @CreateDateColumn()
        regdate : Date;
    
        @UpdateDateColumn()
        updatedate : Date;
    }



