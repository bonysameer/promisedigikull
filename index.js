// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Exercise 1

// Use Promise.resolve(value) to create a promise that will resolve with the value 3.

function someAsynFunction(value) {
  return new Promise((resolve, reject) => {
    if (value === 3) {
      resolve(3);
    } else {
      reject('Value not Accepted');
    }
  });
}

//someAsynFunction(3)
//.then(result => console.log(result))
//.catch(error => console.log(error))

//Use Promise.reject(error) to create a promise that will reject with the string "Boo!"

function somefunction(String) {
  return new Promise((resolve, reject) => {
    if (String === 'Boo!') {
      reject('Boo!');
    } else {
      resolve('not boo, resolve');
    }
  });
}

// somefunction("Boo!")
// .then(result => console.log(result))
// .catch(error => console.log(error))

// You have the outline of a function makePromiseWithConstructor(itShouldResolve)

// Use the Promise constructor to create a promise that will:

// resolve if itShouldResolve is truthy

// reject if itShouldResolve is falsy

function makePromiseWithConstructor(itShouldResolve) {
  return new Promise((resolve, reject) => {
    if (itShouldResolve) {
      resolve('truthy');
    } else {
      reject('falsy');
    }
  });
}

makePromiseWithConstructor('itShouldResolve')
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makePromiseWithConstructor(0)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// Exercise 4

// This is a common use of the Promise constructor. If you want to simulate waiting for a value, a common technique is to create a function like the following.

// It simply accepts a value, and a delayInMs, then returns a promise that will resolve with that value after that delay.

function timerPromise(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise resolved at ${value} second`);
    }, value * 1000);
  });
}

timerPromise(3)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

timerPromise(1)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

timerPromise(8)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
