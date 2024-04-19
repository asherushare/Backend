// forEach, map, filter, indexOf

console.log("This is Patra");
let arr = [23, 33, 90, 0];
console.log(arr);

arr.forEach(function(val) {
  console.log(val + " hello world!");
})

let ans = arr.map(function(val) {
  return 13;
})

console.log(ans);
console.log(ans + 23);

let result = arr.map(function(val) {
  return val > 3;
})

console.log(result);

let ans2 = arr.filter(function(val) {
  if(val > 3) {
    return true;
  }
  else {
    return false;
  }
})

console.log(ans2);

let ans3 = arr.find(function(val) {
  if(val > 23) {
    return val;
  }
})

console.log(ans3);
console.log(arr.indexOf(39));




// Objects

let obj = {
  name: "Patra", 
  age : 23,
  color : "black"
}