// How to execute ?
// yarn start

// interface 는 컴파일 되지 않는다
// interface 를 js 파일(커뮤ㅏ일된 파일)에 넣고 싶을 땐, class를 사용한다.
// interface Human {
//   name: string,
//   age: number,
//   gender: string
// }

class Human {
  public name: string;
  public age: number;
  public gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const person = new Human("yongwoon kim", 30, "male")


const sayHi = (persion: Human): string => {
  return `Hello ${persion.name}, your are ${persion.age}, you are a ${persion.gender}`;
}

console.log(sayHi(person))


// export 하므로서 module 로 사용가능하다.
export {};
