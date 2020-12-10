// How to execute ?
// yarn start

const sayHi = (name: string, age: number, gender: string) => {
  console.log(`Hello ${name}, your are ${age}, you are a ${gender}`)
}

sayHi("yongwoon", 30, "male")


// export 하므로서 module 로 사용가능하다.
export {};
