// array3.html과 연결

// 1 ~ 10 자연수를 배열에 저장

// 10개의 길이를 가진 배열 생성
let number = new Array(10);
console.log(number.length);

// 저장
/*
number[0] = 1;
number[1] = 2;
number[2] = 3;
number[3] = 4;
number[4] = 5;
number[5] = 6;
number[6] = 7;
number[7] = 8;
number[8] = 9;
number[9] = 10;
*/
for(let i = 0; i < number.length; i++){
    number[i] = i + 1;
}


// 출력
for(let i = 0; i < number.length; i++){
    document.write(number[i] + " ");
}
    // for in 문
/*
    for(let num in number){
        document.write(number[num] + " ");
    }
*/

// 알파벳 대문자를 저장 (26개)
// charset - 아스키코드(128개) / 'A' = 65;
    // 코드값으로 저장 후 출력!
let alphabet = new Array(26);
let ch = 'A';
//console.log(ch.charCodeAt(0));
ch = ch.charCodeAt(0); // 코드 값으로 다시 저장

// 저장
for(let i = 0; i < alphabet.length; i++){
    alphabet[i] = ch; // ch = 65
    ch++; // ch = ch + 1
//    console.log(alphabet[i]); >> 숫자로 출력됨
}

// 출력
console.log("알파벳 대문자 저장 후 출력 하기")
for(let i = 0; i < alphabet.length; i++){
    console.log(alphabet[i] + " , " + String.fromCharCode(alphabet[i]));

}