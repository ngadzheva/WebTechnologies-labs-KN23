window.onload = function () {
    console.log('Page loaded');
}

(function () {
    console.log('IIFE loaded');
    
    const studentsHeader = document.getElementsByTagName('header')[0];
    console.log(studentsHeader);
    studentsHeader.innerHTML += ' Marks'; 

    const headerRow = document.getElementById('header-row');
    console.log(headerRow);
    const actionCell = document.createElement('th');
    const actionCellText = document.createTextNode('Action');
    actionCell.appendChild(actionCellText);
    headerRow.appendChild(actionCell);

    const markTh = document.createElement('th');
    markTh.innerHTML = 'Mark';
    actionCell.before(markTh);

    const studentRow = document.getElementsByClassName('student')[0];
    const fnCell = document.getElementById('fn');
    const markCell = document.createElement('td');
    markCell.innerHTML = 6;
    markCell.setAttribute('id', 'mark');
    fnCell.after(markCell);

    const deleteBtn = document.getElementById('delete');
    deleteBtn.addEventListener('click', deleteStudent);

    const addBtn = document.getElementsByName('add')[0];
    addBtn.addEventListener('click', function(event) {
        event.preventDefault();

        addStudent();
    });
}());

function deleteStudent(event) {
    const rowToDelete = event.target.parentNode.parentNode;
    rowToDelete.parentNode.removeChild(rowToDelete);
}

function addStudent() {
    const firstName = document.getElementsByName('first-name')[0];
    const lastName = document.getElementsByName('last-name')[0];
    const fn = document.getElementsByName('fn')[0];
    const mark = document.getElementsByName('mark')[0];

    const studentInfo = {
        firstName: firstName.value,
        lastName: lastName.value,
        fn: fn.value,
        mark: mark.value
    };

    appendTable(studentInfo);

    firstName.value = '';
    lastName.value = '';
    fn.value = '';
    mark.value = '';
}

function appendTable(student) {
    const tbody = document.getElementsByTagName('tbody')[0];

    const tr = document.createElement('tr');
    const firstNameTd = document.createElement('td');
    firstNameTd.innerHTML = student.firstName;
    const lastNameTd = document.createElement('td');
    lastNameTd.innerHTML = student.lastName;
    const fnTd = document.createElement('td');
    fnTd.innerHTML = student.fn;
    const markTd = document.createElement('td');
    markTd.innerHTML = student.mark;
    const deleteTd = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';

    deleteBtn.addEventListener('click', deleteStudent);
    deleteTd.appendChild(deleteBtn);

    tr.append(firstNameTd, lastNameTd, fnTd, markTd, deleteTd);
    tbody.append(tr);
}