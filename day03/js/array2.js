// Array 객체를 사용한 배열
let num = new Array(); // 빈 배열 생성
console.log(num);
console.log(num.length + "개" + "(빈 배열의 length)");

// 저장(입력)
num[0] = 10;
num[1] = 20;
num[2] = 30;

console.log(num); // 출력

// 특정요소 1개 조회
console.log(num[0]);

// 전체요소 검색
for(let i = 0; i < num.length; i++){
    console.log(num[i]);
}

//for in문
console.log("for in 문 검색")
for(let n in num){
    console.log(num[n] + " ");
}


console.log("배열에 저장된 변수 연산하기")
// 연산
console.log(num[1] - num[2]);
console.log(num[1] <= num[2]);

// 합계 및 평균
let sum = 0;
for(let i = 0; i < num.length; i++){
    sum += num[i];
}   
avg = sum / num.length; // 평균 = 합계 / 개수 
console.log(sum);
console.log(avg.toFixed(2));