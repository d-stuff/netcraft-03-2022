const data = require('data');

function createStudentCard(data) {
    for (let i = 0; i < data.length; i++) {
        const studentInfo = data[i];
        const studentCard = document.getElementsByClassName('card');
        const container = document.createElement('div');
        let studentName = document.createElement('h2');
        let studentImage = document.createElement('img');
        let studentEmail = document.createElement('p');
        let studentDescription = document.createElement('p');
        studentName = studentInfo.fullName;
        studentImage = studentInfo.image;
        studentEmail = studentInfo.email;
        studentDescription = studentInfo.description;
        container.append(studentName, studentDescription, studentEmail)
        studentCard.append(studentImage, container);
    }
};

createStudentCard(data);