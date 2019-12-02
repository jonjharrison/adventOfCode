var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, 'input-1.txt');
 
var data = fs.readFileSync(filePath).toString().split('\n');
data.pop();

var calculateFuel = x => Math.floor(x / 3) - 2;
var calculatedData = data.map(calculateFuel);

var answer = calculatedData.reduce((acc, cur) => {
  var moduleFuel = cur;
  var additionalFuel = 0;
  while (moduleFuel > 0) {
    moduleFuel = calculateFuel(moduleFuel);

    if (moduleFuel > 0) {
      additionalFuel += moduleFuel;
    }
  }
  return acc + cur + additionalFuel;
}, 0);

console.log(`total is ${answer}`);

