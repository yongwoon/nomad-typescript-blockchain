"use strict";
// How to execute ?
// yarn start
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "yongwoon kim",
    age: 30,
    gender: "male"
};
const sayHi = (persion) => {
    return `Hello ${persion.name}, your are ${persion.age}, you are a ${persion.gender}`;
};
console.log(sayHi(person));
//# sourceMappingURL=index.js.map