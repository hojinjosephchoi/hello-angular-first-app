# Module

## ES6 Module
- 세부 구현이 숨겨지고, 공개 API를 이용해 다른 코드에서 재사용 가능한 코드
- 변수 scope이 모듈로 제한
- SystemJS : 동적으로 로딩
- webpack : 모듈 번들링


### export
~~~
export class Greeting {
  sayHello(name: string) {
    console.log('typescript hello ' + name);
  }
}
~~~

### import
~~~
import {Greeting} from './app/greeting';

...

const myGreeting = new Greeting();
myGreeting.sayHello('hojin');
~~~


## Angular Module
- 컴포넌트, 파이프, 서비스 등과 같은 앵귤러 애플리케이션의 주요 부분을 기능단위로 그룹핑하게 해준다.
- 모든 앵귤러 애플리케이션은 하나의 Root Module을 가진다. (app.module.ts : root module)
- 여러 Feature Module을 가질 수 있다.
- 재사용할 수 있는 기능을 외부에 배포하기 위해 사용되기도 한다. (ex. 메테리얼 디자인의 MdButtonModule, 부트스트랩의 ModalModule)

## module 생성
~~~
ng generate module {모듈명}
~~~

## module 내 component 생성
~~~
ng g c todo/todos --module /todo/todo.module.ts --export
ng g c {모듈명/하위폴더} --module {특정모듈파일} --export(외부에서 사용가능하도록 함)
~~~

