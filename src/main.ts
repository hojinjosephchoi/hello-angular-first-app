import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {Greeting} from './app/greeting';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic() : 코드컴파일을 브라우저에서 동적으로 처리해주는 메소드
platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));

const myGreeting = new Greeting();
myGreeting.sayHello('hojin');
