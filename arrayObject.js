// Given an array of strings, use a function to reverse all the elements in the string 
// in ascending order and the specific elements in descending order



// Given an array of objects, each object representing a person with a name and age property, 
// write a function that returns the sum of all people who are less than 18 years.
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];
// let sum=0
// let age=people.map(item=>item.age)
// let su
// console.log(age);
function sumOfAge(people) {
  let sum = 0;
  for (let i = 0; i < people.length; i++) {
    if (people[i].age < 18) {
      sum += people[i].age;
    }
  }
  return sum;
}
console.log(sumOfAge(people))

// Using JS functions and an array of numbers, return positive if an element within the array is positive, 
// negative if an element is negative, else zero
function positiveNevgative(numbe) {

  if (numbe>=0) {
    return "positive"
  }
  else if (numbe<=0){
    return "negative"
  }
  else{
    return null
  }

}
let numbe=[1,9,8,98,-9,8]
console.log(positiveNevgative(numbe))

// Given an array of objects, where each object represents an employee with an id, 
// name, and salary property, write a function that returns a new array of employee 
// objects sorted by their salary in ascending order.
let employyeeees=[
  {id:76865433,name:'Regina',salary:30000},
  {id:76865478,name:'Chege',salary:32000},
  {id:76865433,name:'Wairimu',salary:380000}

]
let salary=employyeeees.map(item=>item.salary)
console.log(salary.sort());

// Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.