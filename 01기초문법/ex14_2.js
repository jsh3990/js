//반목문의 중첩 활용
/* 
반복의 회전은 바깥회전에 따라서 안쪽회전이 바뀔 수 있음
바깥반목문 - 행
안쪽반복문 - 별출력
*
**
***
****
*****
*/

let star = 5;
// let result1 = "";
// for (let i = 1; i <= star; i++) {
    
//     for(let j = 1; j <= i; j++) {
//         result1 += "*";
//     }
//     // 여기서 줄바꿈 문자열
//     result1 += "\n"
// }
// console.log(result1);
// console.log(`------------------------`);

/* 
***** 1-5
**** 2-4
***  3-3
** 4-2
* 5-1
*/


let result2 = ""; //출력의 합
for (let i = 1; i <= star; i++) { // 행
    for (let j = 1; j <= 6-i; j++) { // 출력
        result2 += "*";
    }
    result2 += "\n";
}
 console.log(result2);
 
