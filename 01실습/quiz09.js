//1. 구구단 5단을 for문 출력

for (let i = 1; i <= 9; i++){
    console.log(`5 x ${i} = ${5*i}`);
    
}

//2. 7~100까지 정수 중에서 7의 배수 출력
for (let i = 7; i <= 100; i++) {
    if (i % 7 == 0) {
        console.log(i);
    }
}

//3. 1~50까지 홀수의 합
let sum = 0
for (let i = 0; i <= 50; i++ ) {
    if (i % 2 == 1) {
        sum += i;
    }
}
console.log("1부터 50까지 홀수의 합:", sum);

//4. 100의 약수의 합

let sum2 = 0
for(let i = 1; i <= 100; i++) {
    if(100 % i == 0) {
        sum2 += i
    }
}
console.log("100의 약수의 합:", sum2);
