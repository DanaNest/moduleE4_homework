function printOwnProperties(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key + ": " + obj[key]);
    }
  }
}

let myObject = {
  name: "Ivan",
  age: 30,
  city: "Moscow"
};

const gender = Object.create(myObject);
gender.sex = "male";

printOwnProperties(myObject);

printOwnProperties(gender);