//고차함수 - 함수의 매개변수로 함수가 들어가는 유형(js가 좋아하는 문법)
//forEach - 반복을 대신함

let arr = [1,2,3,4,5,6,7];

// let mySome = function(item, index) {
//     console.log(`값: ${item}, 인덱스: ${index}`);
    
// }

// arr.forEach( mySome ) 

// arr.forEach( function(item, index) {
//     console.log(`값: ${item}, 인덱스: ${index}`);
// });

arr.forEach( item => console.log(`값: ${item}`) );



console.log("---------------------");
//map - 반환에 담긴 값으로 새로운 배열을 만들어서 돌려줌
// let newArr = arr.map( function(item, index) {
//     return item * item;
// } );

let newArr = arr.map( item => item * item);
console.log(newArr);



console.log("---------------------");
//filter - return에 true인 값으로 조건부 필터링
let newArr2 = arr.filter( function(item, index)  {
    return item % 2 === 0; //짝수라면 true, 아니라면 false
}) ;
console.log(newArr2);