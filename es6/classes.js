class Person {
    #name;
    #age;

    constructor(name, age){
        this.#name = name;
        this.#age = age;
    }

    info() {
        return `${this.#name}, ${this.#age}`;
    }

    greeting() {
        console.log(`Good morning, ${this.#name}!`);
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get age() {
        return this.#age;
    }

    set age(age) {
        this.#age = age;
    }
}

const ivan = new Person('Ivan', 22);
console.log(ivan.name);
ivan.greeting();
ivan.name = 'Vanko';
console.log(ivan.name);

class Student extends Person {
    #fn;
    #mark;

    constructor(name, age, fn) {
        super(name, age);

        this.#fn = fn;
    }

    get mark() {
        return this.#mark;
    }

    set mark(mark) {
        this.#mark = mark;
    }

    studentInfo() {
        console.log(`${super.info()}: ${this.#fn}`);
    }

    sayHi() {
        console.log(`Hi, ${super.name}`);
    }
}

const pesho = new Student('Pesho', 23, 888888);
pesho.mark = 5;
console.log(pesho.mark);
pesho.studentInfo();
pesho.sayHi();