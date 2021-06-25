// Follow along with the examples here

function sayHello() {
    console.log('Hello!');
  }

sayHello();

function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
}

sayHelloToIsabel();

function sayHelloToSofia() {
    console.log("Hello, Sofia!");
}

sayHelloToSofia();

function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
}

sayHelloToBrendan();

function doSomething(thing) {
    return 0;
    console.log(thing);
}

console.log(doSomething(['Roads to Judah','Sunbather',
    'New Bermuda', 'Ordinary Corrupt Human Love']));

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
}

sayHelloTo('Isabel');
sayHelloTo("Jane");
sayHelloTo("R2-D2");
sayHelloTo(1);

// console.log(firstName);

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
}

say("Goodbye", "Julio");

say("Julio", "hello");

console.log(say("Hello", "Sofia"))

function add(x, y) {
    return x + y;
}

console.log(add(1, 2));
console.log(add(80, 9000));

function toCelsius(fahrenheit) {
    console.log(fahrenheit);
    return (5/9) * (fahrenheit - 32);
}

console.log(toCelsius(getRandomInt(500)));

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}