// calc-age.html과 연결
// 나이 계산 프로그램
// write() -> getElementById().innerHTML
    function calcAge(){
    //조건 : 현재 연도는 상수로 선언할 것
    //나이 = 현재연도 - 태어난해
    const CURRENT_YEAR = 2023;
    let birthYear, age;
    //입력
    birthYear = prompt("태어난 연도를 입력하세요", "YYYY");
    
    if(birthYear == null){
      document.getElementById("print").innerHTML = "입력이 취소되었습니다.";
    }else if(isNaN(birthYear)){  //문자를 입력했을 경우
      document.getElementById("print").innerHTML = "숫자를 입력해주세요";
    }else{
      birthYear = parseInt(birthYear);  //문자를 숫자로 바꿈

      //계산
      age = (CURRENT_YEAR - birthYear) + 1;

      document.getElementById("print").innerHTML = CURRENT_YEAR + "년 현재<br>" + birthYear + 
      "년에 태어난 사람의 나이는 " + age + "세입니다."
    }
}
