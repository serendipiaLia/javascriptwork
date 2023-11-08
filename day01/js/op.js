// operator.html과 연결

let num1 = 8, num2 = 5;
let result;

// 산술 연산
/*
result = num1 + num2;
console.log(result);

result = num1 - num2;
console.log(result);

result = num1 * num2;
console.log(result);

result = num1 / num2;
console.log(result);

result = num1 % num2;
console.log(result);
*/

// 비교 연산
result = num1 > num2;

console.log(result); //true
console.log(typeof(result)); //boolean

result = (num1 == num2);
console.log(result); //false

result = (num1 != num2);
console.log(result); //true

// 논리 연산자

// 논리 곱 : and
result = (num1 == num2) && (num1 >= num2);
console.log(result); //false 

// 논리 합 : or
result = (num1 == num2) || (num1 >= num2);
console.log(result); //true  

// 논리 부정 : not
result = !(num1 == num2);
console.log(result); // true


// 조건 연산자
result = (num1 < num2) ? 'T' : 'F';
console.log(result); //F

    // 홀수,짝수 판정
    result = (num1 % 2 == 0) ? "짝수" : "홀수";
    console.log(result); // 짝수
    alert("판정 결과 : " + result); // 페이지 실행될 때 뜨는 창
    document.write("<span class='acess'>판정 결과 : " + result + "</span>"); // 페이지 내부에서 띄우기
