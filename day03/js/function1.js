// function1.html과 연결
// 함수 정의
// 매개 변수(입력)가 없는 함수
function sayHello(){
    document.write("안녕하세룡 <br>");
}
// 매개 변수가 있는 함수 (생략가능)
function sayHello2(name){
    document.write("Good Morning~ " + name + " :> ");
}
 
// 함수 사용 - 호출
sayHello();
sayHello2("Lia");

// 구구단을 출력하는 함수 정의
function gugudan(dan){
    for(var i = 1; i <= 9; i++){
        document.write(dan + "x" + i + "=" + (dan*1) + "<br>")
    }
}

// 구구단 호출
gugudan(4);