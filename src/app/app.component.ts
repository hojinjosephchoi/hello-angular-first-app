import { Component } from '@angular/core';

// @ : Typescript 데코레이터
// AppComponent 클래스는 Component 클래스다 라는 의미

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular!!!';
}
