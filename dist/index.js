"use strict";
// How to execute ?
// yarn start
Object.defineProperty(exports, "__esModule", { value: true });
// interface 는 컴파일 되지 않는다
// interface 를 js 파일(커뮤ㅏ일된 파일)에 넣고 싶을 땐, class를 사용한다.
// interface Human {
//   name: string,
//   age: number,
//   gender: string
// }
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const person = new Human("yongwoon kim", 30, "male");
const sayHi = (persion) => {
    return `Hello ${persion.name}, your are ${persion.age}, you are a ${persion.gender}`;
};
console.log(sayHi(person));
//# sourceMappingURL=index.js.map