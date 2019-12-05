/*
Day 4, Part 1
*/

// iterate through 134564 - 585159, exclusive.
    // 


// credit to https://stackoverflow.com/questions/6176684/how-to-determine-if-a-string-contains-a-sequence-of-repeated-letters
function hasDouble(num) {
    // if the number has repeating digits back to back, return true.
    let repeating = /(\d)\1/;
    let result = repeating.test(num);
    
    return result;
}

function isAscending(num) {
    let numArr = num.toString().split('');
    // if the number in front of the current place is smaller, return false.
    for (let i = 0; i < numArr.length - 1; i++) {
        if (parseInt(numArr[i]) > parseInt(numArr[i + 1])) {
            return false;
        }
    }

    // after going through everything, return false
    return true;
}

function findPossiblePasswordCombos() {
    let possibleCombos = 0;
    for (let i = 134564; i < 585159; i++) {
        if (hasDouble(i) && isAscending(i)) {
            possibleCombos++;
        }
    }

    return possibleCombos;
}

// let test1 = 111111;
// let test2 = 223450;
// let test3 = 123789;

// console.log(`${hasDouble(test1)} should be true`);
// console.log(`${hasDouble(test2)} should be true`);
// console.log(`${hasDouble(test3)} should be false`);

// console.log(`${isAscending(test1)} should be true`);
// console.log(`${isAscending(test2)} should be false`);
// console.log(`${isAscending(test3)} should be true`);

console.log(`Part 1 has ${findPossiblePasswordCombos()} potential password combos`);

/*
Day 4, Part 2
*/
function hasDoublePart2(num) {
    let numArr = num.toString().split('');

    let current = numArr.shift();
    let currentCount = 1;
    let counts = [];

    while (numArr.length) {
        let check = numArr.shift();

        // increment if it's the same number, otherwise back to 0
        if (check === current) {
            currentCount++;
        } else {
            current = check;
            counts.push(currentCount);
            currentCount = 1;
        }
    }

    counts.push(currentCount);

    if (counts.includes(2)) {
        return true;
    } else {
        return false;
    }
}

let test4 = 112233;
let test5 = 113444;
let test6 = 111122;

console.log(`${hasDoublePart2(test4)} should be true`);
console.log(`${hasDoublePart2(test5)} should be true`);
console.log(`${hasDoublePart2(test6)} should be true`);

function findPossiblePasswordCombosPart2() {
    let possibleCombos = 0;
    for (let i = 134564; i < 585159; i++) {
        if (hasDoublePart2(i) && isAscending(i)) {
            possibleCombos++;
        }
    }

    return possibleCombos;
}

console.log(`Part 2 has ${findPossiblePasswordCombosPart2()} potential password combos`);
