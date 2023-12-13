// Destructuring
const student = {
    name: 'Student Name',
    age: 22,
    fn: 888988
};

const { age, name: studentName, fn, mark = 2 } = student;
console.log(studentName);
console.log(mark);


const studentInfo = ({ name, fn = 88888, mark }) => {
    console.log(`${fn}: ${name} - ${mark ?? 'N/A'}`);
}

studentInfo(student);
studentInfo({name: 'Ivan', age: 22, mark: 6});
studentInfo({name: 'Petkan', age: 22});

const asdf = (object) => {
    console.log(object?.prop ?? 'N/A');
}

asdf();

const numbers = [1, 5, 8, 9, 11];
const [ first, , third, , fifth ] = numbers;
console.log(third);
console.log(fifth);

const sum = ([a, b, c = 0]) => {
    console.log(a + b + c);
};

sum(numbers);
sum([5, 8, 9]);
sum([8, 9]);

let a = 4;
let b = 6;

// const temp = a;
// a = b;
// b = temp;

[ b, a ] = [ a, b ];
console.log(b)
console.log(a)

// Spread operator
const arr = [1, 8, [9, 5], 6];
const extendedArr = [ 5, 7, ...arr, 8];
console.log(extendedArr);
const arrCopy = [...arr];
console.log(arrCopy)

const log = (numbers) => {
    console.log(...numbers)
}

log([2, 8, 90]);
log([2, 5]);

const studentData = {
    name: 'Ivan',
    ...student,
    mark: 6,
    degree: 'Master'
};
console.log(studentData)

const arrObj = {
    ...arr
}
console.log(arrObj)

// Rest operator
const multiply = (a, b, ...numbers) => {
    const result = numbers.reduce((res, number) => res * number, 1);
    console.log(result);
}

multiply(2, 3);
multiply(8, 9, 2, 4);
multiply(7, 1, 5);
multiply(6);