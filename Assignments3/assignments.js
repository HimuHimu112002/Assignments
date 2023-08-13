// problem =============== 1
function printObjectProperties(val) {

    if(JSON.stringify(val) === '{}'){
        console.log(`"Object is empty."`)
    }
    for (const allAttri in val) {
        console.log(`"property: ${val[allAttri]}"`)
        
    }
}
printObjectProperties({name: "Aktarujjaman",age: 24,school: "ostad"})



// problem ============== 2
function findMaxNumber(value) {
    if(value == ""){
        return null;
    }else{

        let lrg = value[0];
        for(let i= 0; i <= value.length; i++){
            if(lrg < value[i]){
                lrg = value[i];
            };
        };
        return(lrg);
    }

};
let result = findMaxNumber([10,20,30,100]);
console.log(result);



// problem ============== 3
function mergeArrays (a, b) {
    return newArray = [...a, ...b];
}
let mrgArray = mergeArrays([1,2,3],[4,5,6]);
console.log(mrgArray)




// problem ============== 4
function calculateSquare(value) {
    return value * value
}
let calSquare = calculateSquare(5)
console.log(`Output: ${calSquare}`)




// problem ============== 5
function doubleNumbers(value) {
    return value.map((value)=> value*2)
}
const numbers = [1, 2, 3, 4, 5];
console.log(doubleNumbers(numbers));



// problem ============== 6
class MathUtility {
    static multiply(a,b){
        return a * b
    }
}
console.log(`Output: ${MathUtility.multiply(2, 8)}`);



// problem ============== 7
class Animal{
    constructor(name, sound){
        this.name = name
        this.sound = sound
    }
    makeSound(){
        return this.sound
       
    }
}

class Dog extends Animal{
    fetch(){
        return `"${"Fetching the ball!"}"`
    }
}
const animal = new Animal("Lion", "Roar");
console.log(`Output: "${animal.makeSound()}"`)


const dog = new Dog("Buddy", "Woof")
console.log(`Output: "${dog.makeSound()}"`)
console.log(`Output: ${dog.fetch()}`)



// problem 8 ================ 
class Person {

    constructor(name, age){
        this.name =  name
        this.age = age
    }
    introduce() {
        return (`Otput: "Hello, my name is ${this.name} and I am ${this.age} years old."`)
    }

}
class Student extends Person{

    constructor(name, age, major){
        super(name,age)

        this.name =  name
        this.age = age
        this.major = major

    }
    introduce() {
        return (`Otput: "Hello, my name is ${this.name} and I am ${this.age} years old. I am majoring in ${this.major}"`)
    }

}

let person1 = new Person("Himu", 24)
console.log(person1.introduce());


let student1 = new Student("Himu", 24, "Computer Science")
console.log(student1.introduce());