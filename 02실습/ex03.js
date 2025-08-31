//1. 학생별 점수의 평균을 구해보세요. (중첩)
let students = [
    ["철수", 76, 34, 23],
    ["정재", 30, 99, 76],
    ["남규", 76, 87, 54],
    ["남수", 98, 76, 45]
];
// i = 행, j = 열
for(let i = 0; i < students.length; i++) {

    let sum = 0;
    for(let j = 1; j < students[i].length; j++) { // 
        // console.log(students[i][j]);
        sum += students[i][j];
    }
    console.log(`${students[i][0]}: 평균${(sum / 3).toFixed(1)}`);
}

//2. 가장 비싼 상품을 찾아서 출력
//결과 -> 시계 : 2000000
let products = [
    ["노트북", 1200000],
    ["스마트폰", 800000],
    ["태블릿", 500000],
    ["헤드폰", 300000],
    ["시계", 2000000]
];

console.log("------------------");
let product = products[0][0]; //상품명
let price = products[0][1]; //가격
for(let i = 0; i < products.length; i++) {

    if (price < products[i][1]) {
        product = products[i][0]; //상품
        price = products[i][1]; //상품

    }
}
console.log(`${product} : ${price}`);
