import { Component, OnInit } from '@angular/core';
import {Todo} from '../share/todo.model';

// 함수와 유사
// 메타데이터를 전달함
@Component({
  // 선택자, Element 및 ID(#), class(.)도 사용할 수 있음
  selector: 'app-todos',
  // View에 대한 정의
  templateUrl: './todos.component.html',
  // 여러 스타일 URL을 사용할 수 있음. sass 가능
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  today: Date = new Date();

  constructor() {
    this.todos = [
      { done: false, text: '운동하기'},
      { done: true, text: '공부하기'}
    ];
  }

  ngOnInit() { }

  toggleTodo(todo) {
    todo.done = !todo.done;
  }

  addTodo(text: string) {
    this.todos.push({
      done: false,
      text: text
    });
  }

}
