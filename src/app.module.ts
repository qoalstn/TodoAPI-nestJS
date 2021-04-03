import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './Todo/todos.module';
import { TodoQueryModule } from './todoquery/app.module';

@Module({
  imports: [
    //데이터베이스 연동
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3300,
      username: 'root',
      password: 'admin',
      database: 'todolist',
      entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    TodoModule,
    TodoQueryModule,
  ],
})
export class AppModule {}
