// 'use strict';

var name = 'Nevena';
var greeting = `Hello, ${name}!`;

console.log(greeting);

console.log(1 == '1');
console.log(1 + '1');
console.log(1 - '1asdf');
console.log(1 + -'1');

var numbers = [1, 8, 9, 10, 5, 3];
numbers.unshift(6);

numbers.forEach(function (value) {
    console.log(value);
});

for (var index in numbers) {
    console.log(index);
}

for (var number of numbers) {
    console.log(number)
}

var doubled = numbers.map(function (number) {
    return 2 * number;
})

console.log(doubled)

var sum = numbers.reduce(function (res, number) {
    return res + number;
}, 0);
console.log(sum)

var res = numbers.filter(function (value) {
    return value % 2 === 0;
})
console.log(res)

var student = {
    name: 'Nevena',
    age: 25,
    fn: 88888
};

student['name']
student.age

var key = 'fn';
student[key]

console.log(student.mark)
student.greeting = function () {
    console.log(`Hello!`);
}

student.greeting();

sum = function (a, b = 3, c = 7) {
    console.log(a + b + c)
};
sum(1, 5, 8)

Object.keys(student).forEach(function (key) {
    console.log(student[key])
})

for (var key in student) {
    console.log(student[key])
}

Object.values(student).forEach(function (value) {
    console.log(value)
})

// for (var value of student) {
//     console.log(value)
// }

Object.entries(student)

var a = 5;
function asdf() {
    var b = 6;

    if (a < b) {
        var c = 7;
        let d = 5;
        const f = 8;
    }

    // console.log(a + b + c + d);
}

asdf();
// console.log(b)

const arr = [1, 5, 8];
arr.push(8);
arr.shift();


const obj = {
    prop: 5,
    prop2: 'adhd',
    prop3: {
        a: 'a',
        b: 5
    }
}

obj.prop1 = true;
obj.prop = 9;

// Object.freeze(obj);
// obj.prop = 7;
// console.log(obj.prop)
// obj.prop3.a = 'b';
// console.log(obj.prop3.a)

const copy = Object.assign(obj);
console.log(copy)
copy.prop4 = 4;
console.log(copy);
console.log(obj)