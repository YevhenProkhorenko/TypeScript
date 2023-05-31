// import { Console } from "console";

// const button = document.querySelector("button")! as HTMLButtonElement;
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// button.addEventListener("click", function() {
//   console.log(add(+input1.value, +input2.value));
// });

// const fruit: string[] = [];
// function workWithArr(arr: string[], value: string, action: 'add' | 'delete') {
//   if(action === 'add')
//     arr.push(value)
//   else {
//     const index = arr.indexOf(value);
//     arr.splice(index, 1);
    
//   }
//   return arr;
// }
// workWithArr(fruit, 'Banan', 'add');
// workWithArr(fruit, 'Melon', 'add');
// workWithArr(fruit, 'Pear', 'add');
// console.log(fruit)

// function calc(num1: number, num2: number, callback:(arrg1: number, arrg2: number) => number){
//   return callback(num1, num2);
// }
// function foo(num1: number, num2: number) {
//   return num1 + num2
// };
// const result = calc(1, 3, foo);
// console.log(result);
type PersonType = {
  readonly name: string;
  age?: number;
  ShowName: () => void;
}
const person1: PersonType = {
  name: "Alex",
  age: 30,
  ShowName() {
    console.log(this.name)
  }
}
const person2: PersonType = {
  name: "Max",
  ShowName() {
    console.log(this.name)
  }
}
person1.ShowName();
person2.ShowName();