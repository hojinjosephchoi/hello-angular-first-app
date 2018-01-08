# Hello Angular

## angular-cli.json
angular-cli에서 사용되어지는 configuration 파일
- root : 소스폴더 (src)
- outDir : 빌드되서 배포가능한 폴더 (dist)
- main : 처음 불리는 파일

## main.ts
- AppModule 을 부트스트랩 모듈로 설정

## app.module.ts
- AppModule 클래스 정의
- AppModule은 NgModule이며, AppComponent를 부트스트랩할 컴포넌트로 지정

## app.component.ts
- AppComponent 클래스 정의
- AppComponent는 Component이며 Selector <app-root>에 template를 지정한다.