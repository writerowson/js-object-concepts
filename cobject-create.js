

// Using objects literal
const student = { name: 'sakib', job: 'cricketer' };

// constructor
const person = new Object(student);
console.log(person)

// 
const human = Object.create(student)
console.log(human)
// class syntactic sugar
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
}
const peop = new People('MAnus', 12);
console.log(peop)

// function
function Manus(name) {
    this.name = name;
}
const man = new Manus('kader');
console.log(man)