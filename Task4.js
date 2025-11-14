//Task 4.1: Array of Objects

const students = [
    {name: "Kavindu", age: 21, faculty: "Computing"},
    {name: "Nimesha", age: 22, faculty: "Engineering"},
    {name: "Dinuka", age: 23, faculty: "Business"}
];

// Print all student names
console.log("All student names:");
students.forEach(student => {
    console.log(student.name);
});

// Use .filter() to find students older than 21
const olderStudents = students.filter(student => student.age > 21);
console.log("Students older than 21:", olderStudents);

// Use .map() to create array of all faculty names
const faculties = students.map(student => student.faculty);
console.log("All faculties:", faculties);


//Task 4.2: Object Containing an Array of Objects

const classroom = {
    className: "IT2025",
    teacher: "Mr. Perera",
    students: [
        {name: "Kavindu", age: 21},
        {name: "Nimesha", age: 22},
        {name: "Dinuka", age: 23}
    ]
};

// Print teacher's name
console.log("Teacher:", classroom.teacher);

// Add a new student to the array
classroom.students.push({name: "Tom", age: 22});
console.log("After adding new student:", classroom.students);

// Print all student names in the classroom
console.log("All students in classroom:");
classroom.students.forEach(student => {
    console.log(student.name);
});