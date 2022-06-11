// function Book(title, author, pages, haveRead) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.haveRead = haveRead;
// }

// Book.prototype = {
//   constructor: Book, //za kazdym razem, patrz console.log(book1.constructor === Book);
//   metoda: () => {
//     console.log("tutaj dodajesz funkcje");
//   },
// };
// Book.prototype.haveRead = false;
// let book1 = new Book("jeden", "rys", 111);

// // console.log(book1.title);
// // console.log(book1 instanceof Book);
// // for (let prop in book1) {
// //   console.log(prop);
// // }
// console.log(book1.hasOwnProperty("haveRead"));
// console.log(book1.hasOwnProperty("title"));
// book1.metoda();

// console.log(book1.constructor === Book);

// let book2 = Object.create(Book.prototype);

// function Human(age, hight, weight) {
//   this.age = age;
//   this.hight = hight;
//   this.weight = weight;
// }
// Human.prototype = {
//   constructor: Human,
//   metoda1: () => console.log("metoda 1"),
// };

// function Male(sex) {
//   this.sex = sex;
//   this.metoda2 = () => console.log("memtoda2");
// }
// Male.prototype = {
//   constructor: Male,
//   // metoda2: () => console.log("Male method2"),
// };
// Male.prototype = Object.create(Human.prototype);
// Male.prototype.constructor = Male;
// Male.prototype.metoda3 = () => console.log("metoda 2/3");
// let wojtek = new Male("male");
// wojtek.metoda2();
// // console.log(wojtek.constructor);

// function Bird() {
//   let hatchedEgg = 10;

//   this.change = (number) => (this.hatchedEgg = number);
//   this.getHatchedEggCount = function () {
//     return hatchedEgg;
//   };
// }
// let ducky = new Bird();
// let ducky2 = new Bird();
// // console.log(ducky.getHatchedEggCount());
// // console.log(ducky2.getHatchedEggCount());
// console.log(ducky.change(5));
// console.log(ducky2.change(22));
// console.log(ducky.getHatchedEggCount());
// console.log(ducky2.getHatchedEggCount());
