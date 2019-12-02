/*
Day 2, Part 1
*/
console.log(`PART 1`);
let input = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,9,1,19,1,19,5,23,1,9,23,27,2,27,6,31,1,5,31,35,2,9,35,39,2,6,39,43,2,43,13,47,2,13,47,51,1,10,51,55,1,9,55,59,1,6,59,63,2,63,9,67,1,67,6,71,1,71,13,75,1,6,75,79,1,9,79,83,2,9,83,87,1,87,6,91,1,91,13,95,2,6,95,99,1,10,99,103,2,103,9,107,1,6,107,111,1,10,111,115,2,6,115,119,1,5,119,123,1,123,13,127,1,127,5,131,1,6,131,135,2,135,13,139,1,139,2,143,1,143,10,0,99,2,0,14,0];
console.log(`input is ${input}`);

// reset program alarm state, per prompt
input[1] = 12;
input[2] = 2;

let intcodeOutput = function(inputArray) {
    let input = inputArray.slice();
    for (let i = 0; i < input.length; i += 4) {
        let firstIndex = input[i + 1];
        let secondIndex = input[i + 2];
        let outputIndex = input[i + 3];
    
        if (input[i] === 1) {
            input[outputIndex] = input[firstIndex] + input[secondIndex];
        } else if (input[i] === 2) {
            input[outputIndex] = input[firstIndex] * input[secondIndex];
        } else if (input[i] === 99) { // if input[i] === 99, stop
            break;
        } else { // if input[i] === anything else, something went wrong
            throw new Error(`Data not properly formatted, tried to read ${input[i]} at ${i}`);
        }
    }

    return input;
}

console.log(`${intcodeOutput(input)} should be output`);

/*
Day 2, Part 2
*/
console.log(`PART 2`);
intcodeOutput = function(inputArray) {
    let noun = 0;
    let verb = 0;
    let outputIndex = 0;
    let firstIndex = 0
    let secondIndex = 0;
    let input = inputArray.slice();

    while (input[0] !== 19690720) {
        input = inputArray.slice();
        input[1] = noun;
        input[2] = verb;

        for (let i = 0; i < input.length; i += 4) {
            firstIndex = input[i + 1];
            secondIndex = input[i + 2];
            outputIndex = input[i + 3];
        
            if (input[i] === 1) {
                input[outputIndex] = input[firstIndex] + input[secondIndex];
            } else if (input[i] === 2) {
                input[outputIndex] = input[firstIndex] * input[secondIndex];
            } else if (input[i] === 99) { // if input[i] === 99, stop
                break;
            } else { // if input[i] === anything else, something went wrong
                throw new Error(`Data not properly formatted, tried to read ${input[i]} at ${i}`);
            }
        }

        if (input[0] === 19690720) {
            return (100 * noun) + verb;
        }

        // we didn't get it, increment the noun/verb
        if (verb < 99) {
            verb++;
        } else {
            verb = 0;
            noun++;
        }
    }
}

console.log(`${intcodeOutput(input)} should be the answer`);
