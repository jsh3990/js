//3항연산자 = 조건 ? 참 : 거짓
let age = 20;
let result = age >= 20 ? "성인입니다" : "미성년자입니다";
console.log("당신은", result);

//프로그램에는 랜덤한 값을 만드는 경우가 필요하다.
let ran = parseInt( Math.random() * 10 ); //0부터 10미만의 실수
//Math.random() //0이상 1미만의 랜덤한 실수값을 만들어 준다.
console.log(ran); //0~9까지 랜덤한 정수
let r = ran % 2 === 0 ? "짝수" : "홀수";
console.log("랜덤값", ran, "은", r, "입니다");
