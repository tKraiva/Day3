// JS Objects

// creating an object. An object is defined with braces
const dog = {
  // keys are always strings.
  // age is a key we set it to the value of 10
  age: 10,
  firstName: "Benji",
  lastName: "Burlybottom",
  toys: [
    "Amazon Delivery Box",
    "Pork Leg Bone",
    "Rubber Bunny",
    "Pink torn teddy bear"
  ],
  // for-color: "brown"
  "fur-color": "brown",
  "2": "number 2!"
};

// access keys/properties

// dot notation
console.log(dog.age) //10

// square bracket notation
console.log(dog["age"]);

// we can add new values to this object
dog.middleName = "Permberton";
console.log(dog.middleName);

// used the same key. So it overwrote the previous value of that key
dog["middleName"] = "Green";
console.log(dog.middleName);

// Use square bracket notation if
// your key has special characters
// dog.fur-color;
// console.log(dog.fur-color);
console.log(dog["fur-color"]);

// if you're accessing a key using an expression/variable
console.log(dog[1+1]);

const x = "toys";
console.log(dog[x]);
