/* eslint-disable no-continue */
const PREAMBLE_SIZE = 25;

const getNumbers = (input) => input.split('\n').map(Number);

const isTwoSum = (sum, numbers) => {
  for (const first of numbers) {
    const second = sum - first;

    if (numbers.includes(second)) {
      return true;
    }
  }

  return false;
};

const findFirstNonTwoSumNumber = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (i < PREAMBLE_SIZE) {
      continue;
    }

    if (!isTwoSum(numbers[i], numbers.slice(i - PREAMBLE_SIZE, i))) {
      return numbers[i];
    }
  }

  return null;
};

// Puzzle answer: 556543474
const part1 = (input) => findFirstNonTwoSumNumber(getNumbers(input));

// Puzzle answer: 76096372
const part2 = (input) => {
  const numbers = getNumbers(input);
  const number = findFirstNonTwoSumNumber(numbers);

  for (let i = 0; i < numbers.length; i++) {
    let sum = numbers[i];

    for (let j = i + 1; sum < number; j++) {
      sum += numbers[j];

      if (sum === number) {
        const numbersInRange = numbers.slice(i, j + 1);

        return Math.min(...numbersInRange) + Math.max(...numbersInRange);
      }
    }
  }

  return null;
};

module.exports = { part1, part2 };
