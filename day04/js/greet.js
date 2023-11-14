// greeting.html과 연결

// 2초 간격으로 인사말이 변경할 것
// 콜백 함수 기능(반복 가능) - 자기가 부르는 재귀적 용법
// 배열의 인덱스가 1증가하면 
window.onload = function() { // script src를 head에 넣었을 때 안뜨면, 이 메서드 사용하기
    let message = ["have a great day :>", "good luck", "how r u"];

    let msgIdx = 0;

myGreeting(); // 함수 호출

function myGreeting(){
    let msg = document.getElementById("demo");
    msg.innerHTML = message[msgIdx];
    msg.style.color = "sky blue";
    msgIdx++; // 1증가
    if(msgIdx == message.length){ msgIdx = 0; } // 인덱스 번호 제한 -> 3번은 undifined이기 때문에..
       
    setTimeout(myGreeting, 2000); // myGreeting()호출
    }
}