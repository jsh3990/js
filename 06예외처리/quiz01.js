/* 
1. registUser(유저객체)를 하나 생성한다.
2. 전달된 유저객체의 name값이 2글자 이하이거나, 비어있으면 예외처리를 진행한다.
3. 유저객체 안에 name값이 정상값이라면, 유저의 이름을 반환하면 된다.
*/

function registUser(user) {
    try {
    if (user.name.length === 0) {
        throw new Error("이름이 비어있으면 안 된다.")
    }

    if (user.name.length <= 2) {
        throw new Error("이름은 2글자 이하이면 안 된다.")
    }
    return user.name;

    } catch (error) {
        console.log(error.message);
        return null;
    }

}
let user = {name: "", addr: "서울시"}

user.name = "";
console.log(registUser(user));

user.name = "길동";
console.log(registUser(user));

user.name = "홍길동";
console.log(registUser(user));