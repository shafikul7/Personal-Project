// create object
// const person = {};
// person.name = "MD SHAFIKUL ISLAM";
// person.email = "shafikul1170@gmail.com";

// console.log(person);
// console.log(person.email);

``;
// Create class
// class Person {}
// // Create class inti object
// const person = new Person();
// person.name = "SHAFIKUL ISLAM";
// person.email = "shafikul@gmail.com";

// console.log(person);
// console.log(person.email);

// class Person {
//   name = "SHAFIKUL ISLAM";
//   email = "shafikul@gmail.com";
// }
// const person = new Person();
// const person1 = new Person();
// console.log(person);
// console.log(person1);

// class Person {
//   name = "SHAFIKUL ISLAM";
//   email = "shafikul@gmail.com";
//   constructor(name, email) {
//     this.name -= name;
//     this.email = email;
//   }
// }
// const person = new Person("rubi", "rubi@gmail.conm");
// const person1 = new Person("rubi1", "rub1i@gmail.conm");
// console.log(person);
// console.log(person1);

// // class template create and anther create object
// class Person {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//     console.log(this);
//   }
// }
// const person = new Person("rubi", "rubi@gmail.conm");
// const person1 = new Person("shafikul", "shafikul@gmail.conm");
// console.log(person);
// // console.log(person1);

// class template and  method create object
class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    // private properties convictions
    this._name = name;
    this._email = email;
  }
  changeName(name) {
    this._name = name;
  }
  sendEmail(msg) {
    console.log("To", this._email);
    console.log("sending email", msg);
  }
  print() {
    console.log(this);
  }
}
const person = new Person("Ruby", "ruby@gmail.conm");
const person1 = new Person("Shafikul", "shafikul@gmail.conm");
const person2 = new Person("Shafikul", "shafikul@gmail.conm");
person1.changeName("Md Shafikul islam");
person1.print();
