import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: `
    <button (click)="addTodo(newText)">+</button>
    <input type="text" placeholder="할 일 추가" [(ngModel)]="newText">
  `,
  styles: [`
    :host {
      display: block;
      padding: 16px 16px 16px 10px;
      background-color: white;
    }
    
    input {
      display: inline-block;
      font-size: 18px;
      border: none;
    }
    
    input:focus, button:focus {
      outline: none;
    }
    
    button {
      width: 24px;
      height: 24px;
      border-radius: 24px;
      color: white;
      font-size: 16px;
      line-height: 17px;
      border: 1px solid dimgray;
      background-color: darkblue;
    }
  `]
})
export class AddTodoComponent implements OnInit {

  // @Output() 데코레이터를 사용하여 부모컴포넌트에서 event를 바인딩 받아볼 수 있도록 처리
  @Output() onTodoAdded = new EventEmitter();
  newText: string;

  constructor() { }

  ngOnInit() {
  }

  addTodo(newText: string){
    // EventEmitter의 emit 메소드를 호출하여 이벤트 trigger
    this.onTodoAdded.emit(newText);
    this.newText = '';
  }
}
