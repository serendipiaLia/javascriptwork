// variable.html과 연결된 javascript파일임
// "?학생은 ?학년 ?반 입니다." 를 출력하기
    // 출력함수 : document.write() 사용 + 학생이름은 변하기에 변수 선언
// 변수 이름에 예약어(if, class, for) 사용 불가! 
var sName = "우영우";
var sGrade = 3;
var sClass = 4; //clss 예약어 이므로 S붙여줌

// 출력
document.write(sName + " 학생은 " + sGrade + "학년 " + sClass + "반 입니다.<br>")
document.write(sName + "&nbsp; &nbsp", sGrade + " ", sClass + " ");

console.log("이름 : " + sName); // 웹페이지 console에서 츨력
console.log("학년 : " + sGrade);
console.log("반 : " + sClass);

// charset(문자셋) 연습
var ch1 = 65;
console.log(ch1);
console.log(String.fromCharCode(ch1));

var ch2 = 'B';
console.log(ch2);
console.log(ch2.charCodeAt(0));

// 유니코드
let ch3 = '가';
console.log(ch3);
//document.write(ch3);
console.log(ch3.charCodeAt(0));