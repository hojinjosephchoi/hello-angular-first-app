# Pipe
- 템플릿에서 보이는 데이터를 변환해줌
- AngularJS 1.x 에서는 필터로 제공됨
- 특정값을 보여지는 값만 바꿈

## 사용법
- {{ express | pipeName:paramValue}}
~~~
{{today|date}}
{{today|date:"yy/mm/dd"}}
{{today|date|uppercase}}
{{todos|json}}
~~~