//------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
//['bread', "carrot", "potato", 'chicken', "apple", "orange"];

//------2------
const country = "USA";
console.log([...country]);
//["USA"] ----
//["U","S","A"]

//------Bonus------
let newArray = [...[,,]];
console.log(newArray);
//[undefined,undefined]

//exercise 2:Employees
let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const welcomeMsg=users.map(elm=>`Hello ${elm['firstName']}`)
console.log(welcomeMsg);
const fullStack=users.filter(elm=>elm['role']==='Full Stack Resident')
console.log(fullStack);

const nameFullStack=users
                  .filter(elm=>elm['role']==='Full Stack Resident')
                  .map(elm=>elm['lastName'])
console.log(nameFullStack);

//exercise 3:Star Wars
let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const sumString=epic.reduce((acc,elm)=>acc+" "+elm)
console.log(sumString);

//exercise 4: Employees #2
let students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

const passedCourse=students.filter(elm=>elm['isPassed']===true)
console.log(passedCourse);
const msgPassedCourse=students
                .filter(elm=>elm['isPassed']===true)
                .forEach(elm=>console.log(`Good Job ${elm['name']} you passed the course in ${elm['course']}`))
console.log(msgPassedCourse);