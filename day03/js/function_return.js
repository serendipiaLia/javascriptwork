// function_return.html과 연결

// 제곱 수를 계산하는 함수 -> 어떤 수(x)를 입력받아서 제곱하는 함수
/* 
function square(x){
    return x * x;
}
*/
let square = function(x){
    return x * x;
}
console.log(square(5));

// 매개변수 두 개(x,y)
/*
 function add(x,y){
    return x + y;   >> 구문 리턴
}
*/
let add = function(x,y){
    return x + y;
}
console.log(square(5));

// 위의 식 대신....▼
let result = add(10, 11);
console.log(result);
// console.log(add(4, 5));

    // 매개 변수가 계속 늘어날 수도 있음 !