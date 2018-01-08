import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';
import { FormsModule} from '@angular/forms';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';

@NgModule({
  imports: [
    CommonModule,
    // ngModel을 사용하여 양방향 바인딩을 하기 위함.
    FormsModule
  ],
  providers: [],
  // 템플릿에서 사용할 수 있는 것
  declarations: [
    TodosComponent,
    TodoComponent,
    AddTodoComponent
  ],
  exports: [
    TodosComponent
  ]
})
export class TodoModule { }
