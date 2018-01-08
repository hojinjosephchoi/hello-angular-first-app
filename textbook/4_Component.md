# Component
- 빌딩 블록
- HTML 요소들의 그룹
- 뷰와 로직으로 구성

# app-root : 최상위 컴포넌트
## title : 나의하루+날짜
## todos : 할일목록
### todo : 할일 아이템
### add-todo : 할일추가 버튼

## module 내 component 생성
~~~
ng g c todo/todos/todo --inline-template --inline-style
ng g c {컴포넌트 생성위치} --inline-template(template가 ts파일 내 인라인으로 들어감) --inline-style(css가 ts파일 내 인라인으로 들어감)
~~~