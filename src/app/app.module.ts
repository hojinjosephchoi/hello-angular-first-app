// app.module : root module

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {TodoModule} from './todo/todo.module';

// @ : Typescript 데코레이터
// AppModule 클래스는 NgModule 클래스다 라는 의미

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodoModule
  ],
  providers: [],
  // 부트스트랩 할 컴포넌트 지정
  bootstrap: [AppComponent]
})
export class AppModule { }
