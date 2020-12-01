const expenses = [
  1721,
  979,
  366,
  299,
  675,
  1456
];

const equals2020 = function(expenses) {
  const seenExpenses = new Set();

  for (let i = 0; i < expenses.length; i++) {
    let complement = 2020 - expenses[i];

    if (seenExpenses.has(complement)) {
      return [expenses[i], complement];
    } else {
      seenExpenses.add(expenses[i]);
    };
  }
};

const complements = equals2020(expenses);
console.log(`PART 1`);
console.log(`The expenses are ${complements[0]} and ${complements[1]}`);
console.log(`Therefore, multiplied they are ${complements[0] * complements[1]}`);

const threeEquals2020 = function(expenses) {
  const seenExpenses = new Set();

  for (let i = 0; i < expenses.length; i++) {
    for (let j = i + 1; j < expenses.length; j++) {
      let complement = 2020 - expenses[i] - expenses[j];

      if (seenExpenses.has(complement)) {
        return [expenses[i], expenses[j], complement];
      }
    }

    seenExpenses.add(expenses[i]);
  }
}

const threeComplements = threeEquals2020(expenses);
console.log(`PART 2`);
console.log(`The expenses are ${threeComplements[0]}, ${threeComplements[1]}, and ${threeComplements[2]}`);
console.log(`Therefore, multiplied they are ${threeComplements[0] * threeComplements[1] * threeComplements[2]}`);
