function Person(name, age) {
    this.name = name;
    this.age = age;

    this.info = () => `${this.name}, ${this.age}`;
}

const pesho = new Person('Pesho', 22);
pesho.info();

const info = pesho.info;
info();

const ivan = new Person('Ivan', 23);
pesho.info.call(ivan);

Person.prototype.greeting = function () {
    console.log(`Good morning, ${this.name}!`);
}

ivan.greeting();
pesho.greeting();

ivan.greeting = function () {
    console.log(`Hello, ${this.name}`);
}

ivan.greeting();

function Student(name, age, fn) {
    Person.call(this, name, age);

    this.fn = fn;

    this.studentInfo = () => {
        console.log(`${this.info()}: ${this.fn}`);
    }

    let _mark;

    this.setMark = mark => _mark = mark;
    this.getMark = () => _mark;
}

Student.prototype = Object.create(Person.prototype);

const joro = new Student('Joro', 21, 888888);
joro.name
joro.age
joro.greeting()
joro.studentInfo()

const maria = new Student('Maria', 22, 888798)
console.log(joro.info.call(maria))

Student.prototype.sayHi = function () {
    console.log(`Hi, ${this.name}`)
}

maria.sayHi()
joro.sayHi()
pesho.sayHi()
// pesho.studentInfo()