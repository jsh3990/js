//산술연산자 - 먼저 증가하고, 이후에 대입
let a = 5 * 3;
let b = 5 / 3; //몫 - 소수몫까지 구해준다.
let c = 5 % 3; //나머지

console.log(a, b, c);
console.log( parseInt(b) ); //실수 -> 정수로 변경

//전위연산
let x = 5;
let pre = ++x;
console.log("x는: " + x);
console.log("pre는: " + pre);

//후위연산 - 먼저 대입하고, 이후에 증가
let y = 5;
let post = y++;
console.log("y값: " + y);
console.log("post값: " + post);

//일반적은 ++, --의 표현은
let num = 1;
num++;
num++;
++num;
num--;
--num;