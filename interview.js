
// var courses = ['javascript', 'java', 'c', 'c++', 'python']
// delete courses[2]
// console.log(courses.length);
// console.log(courses);


// what boolean operators can be used in javascript?
// Greater than >
// Less than <
// The 'And' operator = &&
// 'or' operator = ||
// the 'not' operator = !


// define event bubbling
// eventBubble: false;
// <div>
//     parent
//     <div>
//         child
//         <div onclick='getClick()'>Grand child</div>
//     </div>
// </div>


// window.onload and onDocumentReady?
// onload function is not run until all the information on the page is
// loaded. This leads to a substantial delay before any code is executed.This
// onDocumentReady loads the code just after the DOM is loaded. 
// This allows early manipulation of the code


// how comments can be added in css?
// /* */


// which keywords are used to handle exceptions?
// try{

// }
// catch(exp){

// }
// finally{
//     // code runs either it finishes successfully or after catch
// }


// why is @import only at the top?
// it is preferred only at top


// console.log(4>2>1)
// console.log(1<2<4)

// const obj = {
//     a: 1,
//     b: 2,
// }

// const obj2 = {
//     c: 3,
//     d: 4,
// }

// const obj3 = {
//     e: 5,
//     f: 6,
// }

// const obj4 = Object.assign(obj, obj2, obj3)

// console.log(obj4)



// what is arrow function in javascript?
// an arrow function expression is a compact alternative 
// to a traditional function expression
// function hello(a, b) {
//     return a + b + 1;
// }

// hello = (a, b) => a + b + 1


// what is canvas in HTML?
// easy and powerful way to draw diagrams in HTML
// used for drawing graphs, photo compositions, create animations etc
// use javascript for drawing




// what is RWD? 
// Responsive web design

// Difference between css and scss?



// class Car {
//     constructor(name, model) {
//         this.model = model;
//         this.name = name;
//     }
//     start(){
//         console.log(`Name of the car is ${this.name}. Speed - ${this.model}`)
//     }
    
// }

// const bmw = new Car(620, 'BMW')
// bmw.start()


// Inheritance
// class Car {
//     constructor(name, model) {
//         this.model = model;
//         this.name = name;
//     }
//     start(){
//         console.log(this.name)
//     }

//     end(){
//         console.log('Car stopped')
//     }
    
// }

// class ElectricCar extends Car{
//     dashboard(){
//         console.log('child method');
//     }
//     start() {
//         super.start()
//         super.end();
//         this.dashboard();
//     }
// }


// const tesla = new ElectricCar('Tesla', 'A320')
// tesla.start()



// const duplicatedArray = [14,23,5,34,23,12,14,12]

// const duplicates = duplicatedArray.filter((element, index, array) => {
//     return array.indexOf(element) !== index
// })

// console.log(duplicates);


// how to find the count of duplicates in an array?
const numbers = [14,23,5,34,23,12,14,12,23]

const countOfDuplicates = numbers.reduce((obj, num) => {
    if(obj[num] == undefined) {
        obj[num] = 1
        return obj;
    }else {
        obj[num]++;
        return obj
    }
}, {})

console.log(countOfDuplicates)