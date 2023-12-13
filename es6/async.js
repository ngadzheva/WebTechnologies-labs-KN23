const fs = require('fs');

const updateFn = studentData => studentData.replace(/6/g, '8');

let result = '';

fs.readFile('./es6/students.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    result = data;

    console.log('Reading file DONE')

    result = updateFn(result);

    console.log('Updating data DONE')

    fs.writeFile('./es6/editedStudents.txt', result, 'utf-8', (err) => {
        if (err) {
            console.log(err);
            return;
        }
    
        console.log('Writing file DONE')

        //send request
    })
});

// result = updateFn(result);

// console.log('Updating data DONE')

// fs.writeFile('./es6/editedStudents.txt', result, 'utf-8', (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log('Writing file DONE')
// })

console.log('DONE')

const read = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
        
            resolve(data);
        });
    });
}

const write = (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, 'utf-8', (err) => {
            if (err) {
                reject(err);
                return;
            }
        
            resolve();
        })
    })
}

read('./es6/students.txt')
    .then(data => updateFn(data))
    .then(updatedData => write('./es6/promisedEditedStudents.txt', updatedData))
    .then(() => console.log('Process Done'))
    .catch(error => console.error(error));

const updateStudent = async () => {
    let data = await read('./es6/students.txt');
    data = updateFn(data);
    await write('./es6/awaitedEditedStudents.txt', data);
    console.log('Async process done');
}

updateStudent();