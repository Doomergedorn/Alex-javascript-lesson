//variables
let age = 18;
let drinkingAge = 18;
let tarvenOpen = true;

//if statements 
if (age >= drinkingAge && tarvenOpen == true) {
    console.log(' true');
} else {
    console.log(' false');
}

//loops

while (age < 10) {
    console.log('yippy we are young :' + age);
    age = age + 1;
}

for (let i = age; i < 10; i++) {
    console.log('yippy we are young :' + age);
}

//methods
function sayHello(name) {
    console.log('Say Hello ' + name);
}

//calling the sayHello function
sayHello('Pholosho');

//classes

class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log('hello i am person ' + this.name)
    }
}

let me = new Person('Pholosho');
me.sayHello()


