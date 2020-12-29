const passwords = [
  '1-3 a: abcde',
  '1-3 b: cdefg',
  '2-9 c: ccccccccc'
];

const parsePasswordLine = function(line) {
  const splitLine = line.split(': ');

  const parsedRules = splitLine[0].split(' ');
  const bounds = parsedRules[0].split('-');
  const rules = {
    goodIndex: parseInt(bounds[0], 10),
    badIndex: parseInt(bounds[1], 10),
    char: parsedRules[1]
  };

  const password = splitLine[1];

  return { rules, password };
};

const testPassword = {
  rules: {
    goodIndex: 1,
    badIndex: 3,
    char: 'a'
  },
  password: 'aaaabcde',
};
const isPasswordValid = function(password, rules) {
  return (
    (password[rules.goodIndex - 1] === rules.char && password[rules.badIndex - 1] !== rules.char) ||
    (password[rules.badIndex - 1] === rules.char && password[rules.goodIndex - 1] !== rules.char)
  );
};

const passwordTest = isPasswordValid(testPassword.password, testPassword.rules);
const passwordsTest = ['1-3 a: abcde'];

// takes an array of strings, where the strings are the password/rule combos
const checkAllPasswords = function(passwords) {
  let valid = 0;
  let invalid = 0;
  passwords.forEach(passwordLine => {
    const parsedPassword = parsePasswordLine(passwordLine);
    const password = parsedPassword.password;
    const rules = parsedPassword.rules;

    if (isPasswordValid(password, rules)) {
      valid++;
    } else {
      invalid++;
    }
  });

  return {
    valid,
    invalid,
  };
};

console.log('checking passwords...');
console.log(checkAllPasswords(passwords));
