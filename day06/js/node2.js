// create_element2.html과 연결
function addP(){
// p태그 생성
let newP = document.createElement("p");
let newText = document.createTextNode("숨겨진 텍스트 입니다.");
newP.appendChild(newText); // p 태그에 내용 추가

// div 태그에 p태그 추가
let div = document.getElementById("info");
div.appendChild(newP);
}