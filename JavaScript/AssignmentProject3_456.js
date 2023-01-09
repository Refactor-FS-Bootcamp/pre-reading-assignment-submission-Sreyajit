function AssignmentProject3_456(){
    const Student = {
        name: window.prompt('Enter name:'),
        id: window.prompt('Enter id:'),
        city: window.prompt('Enter city:'),
    };
    if ('name' in Student) {
        window.alert(`The student name is ${Student.name}`);
        Student.name = window.prompt('Enter new name:');
        window.alert(`The new student name is ${Student.name}`);
    }
    else window.alert('Student name not found !');
}    