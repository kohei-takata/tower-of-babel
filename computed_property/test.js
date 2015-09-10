const evenOrOdd = +process.argv[2];
const sum = +process.argv[3] + evenOrOdd

var obj = {
  [evenOrOdd % 2 === 0 ? "even" : "odd"]: evenOrOdd,
  [sum]: sum
};

console.log(obj);
