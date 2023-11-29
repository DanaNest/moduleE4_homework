//вариант 1
function checkProperties(string, obj) {
  let checkIn = false
  if (string in obj) {
    checkIn = true
  }
  return checkIn
}
//вариант 2
function checkPropertyTwo(string, obj) {
  return string in obj;
}

let myObject = {
  name: "Ivan",
  age: 30,
  city: "Moscow"
};

const str = "name";
//const str = "year";


console.log(checkProperties(str, myObject));
console.log(checkPropertyTwo(str, myObject));


