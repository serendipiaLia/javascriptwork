// create_element1.html과 연결
function myFunction(){
    // p태그 생성
    //<li>Tea</li>
    //부모요소.appendChild(자식요소)
    let newLi = document.createElement("li");
    let newText = document.createTextNode("Tea")
    newLi.appendChild(newText); 

    let ul = document.getElementById("myList");
    ul.appendChild(newLi);
}