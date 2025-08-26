// &&  and - 양쪽 항이 모두 true이여야 true / 하나라도 false면 false
// || or - 양쪽 항 중 한쪽만 true여도 true / 모든 조건이 false면 false
let a = true;
let b = false;

console.log("&&의 결과:" + (a && b) ); //f
console.log("||의 결과:"+ (a || b) ); //t
console.log("!:"+ !a ); //f

//어떤 수가 3의 배수이면서 4의 배수인 경우 - 조건식으로
let x = 12;
console.log( x % 3 === 0 );
console.log( x % 4 === 0 );
console.log( x % 3 === 0 && x % 4 === 0 );



