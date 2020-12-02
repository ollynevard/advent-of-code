const { toSortedNumberArray } = require('../lib/input');

// https://en.wikipedia.org/wiki/3SUM
const twoSum = (sum, numbers) => {
  const set = new Set(numbers);

  for (const first of numbers) {
    const second = sum - first;

    if (set.has(second)) {
      return first * second;
    }
  }

  return null;
};

const threeSum = (sum, numbers) => {
  const set = new Set(numbers);

  for (const first of numbers) {
    for (const second of numbers) {
      const third = sum - first - second;

      if (set.has(third)) {
        return first * second * third;
      }
    }
  }

  return null;
};

// Puzzle answer: 73371
const part1 = (input) => {
  return twoSum(2020, toSortedNumberArray(input));
};

// Puzzle answer: 27642310
const part2 = (input) => {
  return threeSum(2020, toSortedNumberArray(input));
};

module.exports = { part1, part2 };
