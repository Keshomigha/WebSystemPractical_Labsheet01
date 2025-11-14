//Task 3.1: Creating and Accessing Objects

// Create student object
const student = {
    name: "Kavindu",
    age: 21,
    faculty: "Computing",
    subjects: ["Web Development", "Database Systems", "Programming"]
};

// Print student's name and faculty
console.log("Student name:", student.name);
console.log("Faculty:", student.faculty);

// Add new property called year
student.year = 2025;
console.log("After adding year:", student);

// Change age to 22
student.age = 22;
console.log("After updating age:", student);

// Print all subjects in a loop
console.log("Student subjects:");
for(let i = 0; i < student.subjects.length; i++){
    console.log(student.subjects[i]);
}


