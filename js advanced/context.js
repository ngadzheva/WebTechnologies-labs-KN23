name = 'Global';

const pesho = { name: 'Pesho' };
const ivan = { name: 'Ivan' };
const joro = { name: 'joro' };
const maria = { age: 22 };

function sayHi() {
    console.log(`Hi, ${this.name}.`);
}

// sayHi();

ivan.hi = sayHi;
// ivan.hi();

maria.hi = sayHi;
// maria.hi();

ivan.greeting = function (a, b, c) {
    console.log(`Good morning, ${this.name}!`);
}

// ivan.greeting();
const greet = ivan.greeting.bind(ivan);
// greet();

ivan.greeting.call(pesho, 1, 2, 3);
ivan.greeting.apply(joro, [1, 2, 3]);