// How to execute ?
// yarn start

interface Human {
  name: string,
  age: number,
  gender: string
}

const person: Human = {
  name: "yongwoon kim",
  age: 30,
  gender: "male"
};

const sayHi = (persion: Human): string => {
  return `Hello ${persion.name}, your are ${persion.age}, you are a ${persion.gender}`;
}

console.log(sayHi(person))


// export 하므로서 module 로 사용가능하다.
export {};
