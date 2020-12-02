const { toArray } = require('../lib/input');

const POLICY_REGEX = /(\d+)-(\d+)\s(\w):\s(\w+)/;

// Puzzle answer: 416
const part1 = (input) => {
  const policies = toArray(input);
  let validCount = 0;

  policies.forEach((policy) => {
    const [, min, max, letter, password] = policy.match(POLICY_REGEX);
    const count = (password.match(new RegExp(letter, 'g')) || []).length;

    if (count >= min && count <= max) {
      validCount += 1;
    }
  });

  return validCount;
};

// Puzzle answer: 688
const part2 = (input) => {
  const policies = toArray(input);
  let validCount = 0;

  policies.forEach((policy) => {
    const [, pos1, pos2, letter, password] = policy.match(POLICY_REGEX);
    const letters = password.split('');

    if ((letters[pos1 - 1] === letter) ^ (letters[pos2 - 1] === letter)) {
      validCount += 1;
    }
  });

  return validCount;
};

module.exports = { part1, part2 };
