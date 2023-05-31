// import { Console } from "console";
var person1 = {
    name: "Alex",
    age: 30,
    ShowName: function () {
        console.log(this.name);
    }
};
var person2 = {
    name: "Max",
    ShowName: function () {
        console.log(this.name);
    }
};
person1.ShowName();
person2.ShowName();
