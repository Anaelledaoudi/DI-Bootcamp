//exercice 1
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
//i am john dae from vancouver, canada. Laltitude(49.2827), Longitude(-123.1207)

//exercice 2
function displayStudentInfo({first:fname,last:lname}){
    console.log("Your full name is",fname,lname);
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});
//exercice 3
const users = { user1: 18273, user2: 92833, user3: 90315 }
const userArray=Object.entries(users);
console.log(userArray);
const double=userArray.map((elm)=>elm[1]*=2);
console.log(userArray);
//exercice 4
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
//object

//exercice 5
class Dog {
  constructor(name) {
    this.name = name;
  }
};
//option 2

//exercice 6: challenge
// [2] === [2] //false
// {} === {}//false
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)//4
console.log(object3.number)//4
console.log(object4.number)//5

class Animal{
	constructor(name,type,color)
	{
	  this.name=name;
	  this.type=type;
	  this.color=color;	
	}
}
class Mamal extends Animal{
	constructor(name,type,color){
		super(name,type,color);
	}
	sound(animalSound){
		console.log(`${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`);
	}
}
const farmerCow=new Mamal("Lily","cow","brown");
farmerCow.sound("Moooo");