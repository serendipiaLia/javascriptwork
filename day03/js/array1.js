// array1.html과 연결
// 배열 사용 >> 배열은 순서가 0번 부터 시작!

let animal = []; // 빈 배열 생성
console.log(animal);
console.log(animal.length + "개"); // 빈 배열의 길이

// 입력(저장)
animal[0] = 'cow';
animal[1] = 'pig';
animal[2] = 'horse';
animal[3] = 'cat';

// 출력
console.log(animal); 

// 특정 요소(값)를 조회(검색)
// 1번 인덱스를 출력
console.log(animal[1]);

// 수정(변경)
animal[2] = "dog";

// 삭제
delete animal[1];

// 전체 요소(값) 조회(목록)
// 일반 for문이 아님! 배열 반복문과 변수 반복문은 다름
// 0번 인덱스 부터 시작하고, 배열의 길이 미만일 것 <=, >= (X)
for(let i = 0; i < animal.length; i++){
   document.write(animal[i] + " ");
}

document.write("<br>");
// for in문
for(let i in animal){
    document.write(animal[i] + " ");
}

// Array 객체를 사용한 배열 (array객체 선언)
let num = new Array(animal);
console.log(animal);
console.log(animal.length + "개");