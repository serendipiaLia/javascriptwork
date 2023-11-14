// imgslide.html과 연결

// 이미지 슬라이드
window.onload = function(){

    let picture = ["images/cup-1.jpg", "images/cup-2.jpg", "images/cup-3.jpg"];
    let picIdx = 0;

    showSlide();

    function showSlide(){
        // image의 경로 : src속성 사용
        document.getElementById("pic").src = picture[picIdx];
        picIdx += 1; // picIdx++; 와 동일 
        if(picIdx == picture.length){
            picIdx = 0;
        }
        setTimeout(showSlide, 2000); //2초에 한번씩 ,,
    }
}
