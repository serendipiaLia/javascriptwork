// 학생 5명의 국어와 수학점수 통계 
let score = [
    [80, 70],
    [90, 60],
    [70, 70],
    [100, 90],
    [83, 55]
]

let kor_sum = 0;
let math_sum = 0;
let kor_avg, math_avg;

// 과목별 점수 합계 
// 국어 합계 - 1열 score[i][0]
// 수학 합계 - 2열 score[i][1]
for(let i=0; i<score.length; i++){
    kor_sum += score[i][0];
    math_sum += score[i][1];
}

document.write("국어 합계 : " + kor_sum + "<br>")
document.write("수학 합계 : " + math_sum + "<br>")
document.write("국어 평균 : " + kor_avg + "<br>")
document.write("수학 평균 : " + math_avg + "<br>")

// 변수를 배열로 선언
let sumScore = [0, 0];
let avgScore = [0.0, 0.0];