// if-else.html 과 연결

// 단독 if문
// if ~ else문

//속도 위반 판정 프로그램 +속도 입력 받기! 
// + unll 처리
let limit_speed = prompt("주행 속도를 입력하세요." , "50")
/*
if(limit_speed >= 50){
    document.write("안전속도(50km이하) 위반입니다. 과태료 10만원 부과 대상 :( <br> ")
}
document.write("시속 " + limit_speed + "km로 주행하셨습니다.")
*/
if(limit_speed == null){
    document.write("입력이 취소 되었습니다.")
}else{
    if(limit_speed >= 50){
        document.write("안전속도(50km미만) 위반입니다. 과태료 10만원 부과 대상 :( <br> ");
    }else{
        document.write("안전 속도 준수! :D <br>")
}
document.write("시속 " + limit_speed + "km로 주행하셨습니다.");
}
