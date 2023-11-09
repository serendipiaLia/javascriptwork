// seats > main.html과 연결 (자리배치도)
// 입장객 수에 따른 행과 열, 줄 수 계산

let customer, colNum, rowNum; // 변수선언

customer = 21; 
colNum = 5;

// 나머지의 유무에 따른 조건문
if(customer % colNum == 0) {
    rowNum = customer / colNum; // 몫
}else{ 
    rowNum = parseInt(customer / colNum) + 1; 
}

// 좌석 번호 배치
document.write("<table>");
for(let i = 0; i <= rowNum; i++){ 
    document.write("<tr>")
    for(let j = 1; j <= colNum; j++){ 
        let seatNum = colNum * i + j;
        //좌석 21번까지 나와야하므로 , 좌석 번호가 고객수(21)보다 크면 빠져나와서 break;
        if(seatNum > customer) break; 
        document.write("<td>좌석" + seatNum + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

