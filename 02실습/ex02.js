
//1. 이 배열의 합계와 평균을 출력
let number = [10,20,30,40,50];

let sum = 0;
for (let i = 0; i < number.length; i++) {
    sum += number[i];
}
console.log(`합계 ${sum}, 평균 ${sum / number.length}`);


//2. 이 배열에서 최댓값, 최솟값 찾아서 출력
//힌트 - 변수를 잘 활용해야함
let score = [85,92,70,96,91,60,100];
let max = score[0];
let min = score[0];

for (let i = 0 ; i < score.length; i++) {
    if ( max < score[i]) {
        max = score[i];
    }

    if (min > score[i])
        min = score[i];
}
console.log(`최댓값: ${max}, 최솟값 ${min}`);




//3. 짝수 필터링
//이 배열에서 짝수만 필터링하여 evenNum에 저장하세요.
let numbers = [1,2,3,4,5,6,7,8,9,10];
let evenNum = [];

for (let v of numbers) {
    if ( v % 2 == 0 ) {
        evenNum.push(v);
    }
}
console.log(evenNum);

//4. 배열의 값을 뒤집어서 reverse 배열에 저장
let arr = [1,2,3,4,5];
let reverse = [];
for(let i = arr.length -1; i >= 0; i-- ) { //4에서 출발~
    reverse.push(arr[i]);
}


//5. target값이 배열에 포함되어 있으면 해당 인덱스를 출력. 없으면 -1을 출력
//힌트 - 있다없다는 boolean변수를 이용
let search = ['a', 'b', 'c', 'd', 'e'];
let target = 'e';
let index = -1;
let bool = false;

// console.log (search.indexOf(target));

for (let i = 0; i < search.length; i++) {
    if (target === search[i]) { //찾음
        index = i; // 인덱스 기록
        bool = true; // 찾음 or 못찾음
        break;
    }
}

if (bool) {
    console.log(`${target}의 위치는 ${index} 번째 입니다.`);
} else {
    console.log(`${target}은 없습니다.`);
}

//6. word배열의 문자열의 길이를 저장하는 wordLength 배열을 만들기
let word = ['apple', 'banana', 'melon', 'grape', 'orange'];
let wordLength = []; //5, 6, 5, 5, 6 문자열 길이는 문자열.length

for (let v of word) {
    console.log(v.length);
    
}