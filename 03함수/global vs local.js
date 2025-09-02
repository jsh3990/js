//var 변수의 scope(범위) 함수이다. -> 문제가 많음
//let 변수의 scope(범위) 중괄호이다.
if(true) {
    var x = 10; //전역변수 취급
    let y = 20;
}

console.log(x);
// console.log(y); //error

let a = "홍길동"; //전역변수 - 모든 함수나 제어문에서 접근이 가능
let some = function () {
    console.log(a);
    
    let b = "이순신"; //지역변수 - some함수 안에서만 접근이 간으
}

console.log(b); //error
