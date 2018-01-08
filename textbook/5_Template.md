# Template
- HTML 코드로서 템플릿을 표현
- Template 표현식(Expression)과 Template 문장(Statement)을 가짐
- 바인딩 : DOM 간의 인터렉션 등
- 바인딩의 대상 : 속성, 이벤트, ngModel, class, style

## 바인딩
- Component (class) <-> DOM 간 연결

### {{템플릿 표현식}}
- <h1>{{title}}</h1> : component 인스턴스 내 title 속성에서 값을 가져옴
- Component -> DOM

### [속성]="템플릿 표현식" 
- <todo [todo]="work"> : component의 todo속성을 인스턴스 내 work 속성으로 바인딩
- Component -> DOM

### (이벤트)="템플릿 문장"
- <button (click)="handle()"> : 버튼의 클릭이벤트 발생 시 Component의 handle 메소드 호출
- Component <- DOM

### [(ngModel)]="템플릿 표현식" (AngularJS 1.x)
- <input type="text" [(ngModel)]="name"> : ngModel지시자를 사용하여 Component 인스턴스 name과 양방향 바인딩
- Component <-> DOM


## *ngFor 지시자
- 반복적인 데이터 표현을 위해 사용
~~~
<div *ngFor="let todo of todos">
  <input type="checkbox" [checked]="todo.done" /> {{ todo.text }}
</div>
~~~

## ngModel 사용을 위한 설정
- @NgModule 내 FormsModule (@angular/forms)을 import 해줘야 함
~~~
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    // ngModel을 사용하여 양방향 바인딩을 하기 위함.
    FormsModule
  ],
  ...
})
~~~

