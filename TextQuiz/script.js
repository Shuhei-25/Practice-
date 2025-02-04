// Q1

// console.log("Hellow World");


for ( let i = 0; i <= 100 ; i++ ) {
    console.log(i);
}


const findMax = (arr) => {
    let max = arr[0];

    for ( let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    
    console.log(max);
};

findMax([12, 6, 25, 8, 17]);



class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log(`Hi, I'm ${this.name}, and I'm ${this.age} yesrs old.`);

    }
}

const person = new Person("John", 30);
person.sayHi();




