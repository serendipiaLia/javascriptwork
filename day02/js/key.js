// key-repeat.html과 연결
while(true){
    let key = prompt("계속 반복할까요?" , "y/n");
    if(key == 'y' || key == 'Y'){
        alert("계속 반복");
    }else if(key == 'n' || key == "N"){
        alert("반복 중단");
        break;
    }else{
        alert("지원하지 않는 키");
    }
}
document.write("프로그램 종료");