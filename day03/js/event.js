// showhide_event.html과 연결
   
// 버튼 클릭 시 호출
function showText(){
    // 텍스트는 보이고, 보기 버튼은 숨기기
    // document.getElementById("detail").style.display = "block";
    // document.getElementById("show").style.display = "none";
    let text = document.getElementById("detail");
    text.style.display = "block";

    let showBtn = document.getElementById("show");
    showBtn.style.display = "none";
}
function hideText() {
        // 텍스트는 숨기고, 보기 버튼은 숨기기
    document.getElementById("detail").style.display = "none";
    document.getElementById("show").style.display = "block";
}

