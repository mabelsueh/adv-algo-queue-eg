// // an object
// // like a dictionary in Python
// let student = {
//   // key : value
//   'name':'Jon Snow',
//   'email':'jonsnow@winterfell.com',
//   'year_born': 1982,
//   'weapon':{
//     'name':'Longclaw',
//     'type':'Bastard sword',
//     'material':'Valerian steel'
//   },
//   'calculateAge':function(currentYear){
//     return currentYear - this.year_born;
//   }
// }

// console.log(student.calculateAge(2020))

// let student2 = {

//   'name': 'Jamie Lannister',
//   'email':'jamie@kingslanding.com',
//   'year_born': 1983,
//   'weapon': {
//     'name':'Long sword',
//     'type': 'Long sword',
//     'material':'Steel'
//   },
//    'calculateAge':function(currentYear){
//     return currentYear - this.year_born;
//   }
// }
// console.log(student.name)
// console.log(student.weapon)
// console.log(student.weapon.name)

// console.log(student2.calculateAge(2020))

// CLASS
// a class is a PROTOTYPE of an object
// is a general description of a certain groups of objects that belong to the same category
class Student {
  // what are the fields (or variables that ALL student
  // objects will have and their default values)
  name = '';
  year_born = 1960;
  email = 'N/A';

  constructor(name, yearBorn, email) {
    this.name = name;
    this.year_born = yearBorn;
    this.email = email;
  }
// functions can be in a class
  calculateAge(currentYear) {
    return currentYear - this.year_born;
  }
}

// create an object based on the Student class
let s1 = new Student("Alice White", 1990, 'alice@gemail.com');
console.log(s1);
console.log(s1.calculateAge(2020))

let s2 = new Student("Jane Smith", 1999, 'jane@gemail.com');
s2.name = "Jane Smith"
console.log(s2);
console.log(s2.calculateAge(2020))