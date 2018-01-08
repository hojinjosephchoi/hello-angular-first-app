# Component Communication

## 부모컴포넌트 -> 자식컴포넌트에게 데이터 전달하는 방법
- @Input() 데코레이터를 사용
- ES6 setter 사용가능
- @ViewChild() 데코레이터를 사용

## 자식컴포넌트 -> 부모컴포넌트에게 데이터 전달하는 방법
- @Output() 데코레이터를 사용
- EventEmitter를 사용하여 부모에게 이벤트 전달
- 부모컴포넌트는 $event로 이벤트데이터를 전달받음
- 자식이 부모 컴포넌트를 직접 주입받을 수 있음 (강력한 의존관계 생성으로 반드시 필요하지 않다면 지양... (Tabs->Tab 관계와 같이 반드시 엮이는 경우에만...))

## 클래스 생성
~~~
ng generate class todo/share/todo.model
~~~

## @Input() 데코레이터 사용
~~~
export class TodoComponent implements OnInit {
  ...
  @Input() todo: Todo;
  ...
}

<app-todo [todo]="todo"></app-todo>
~~~

## @Output() 데코레이터 사용
~~~
export class AddTodoComponent implements OnInit {
  ...
  @Output() onTodoAdded = new EventEmitter();
  ...
  addTodo(newText: string){
    // EventEmitter의 emit 메소드를 호출하여 이벤트 trigger
    this.onTodoAdded.emit('hello');
  }
}

<app-add-todo (onTodoAdded)="addTodo($event)"></app-add-todo>
~~~
