// fee.html과 연결
// 나이에 따른 입장료 계산
let age = prompt("나이를 입력하세요.", "숫자로 기입");
let fee = 0; // fee 초기화

if (age >= 1 && age < 8) {
    document.write("미취학 아동<br>");
    fee = 1000;
}else if(age >= 8 && age < 14){
    document.write("초등학생<br>")
    fee = 2000;
}else if(age >= 14 && age < 20){
    document.write("중,고등학생<br>")
    fee = 2500;
}else{ 
    document.write("일반인<br>");
    fee = 3000;
}
document.write("입장료는 <span class = 'accent'>" + fee + "원</span> 입니다.")