/* eslint-disable no-continue */
const NOP = 'nop';
const ACC = 'acc';
const JMP = 'jmp';

const getInstructions = (input) =>
  input.split('\n').map((line) => {
    const [operation, argument] = line.split(' ');
    return { operation, argument: Number(argument) };
  });

const runProgram = (instructions) => {
  const processedInstructions = new Set();
  let accumulator = 0;

  for (let i = 0; i < instructions.length; i++) {
    const { operation, argument } = instructions[i];

    if (processedInstructions.has(i)) {
      return { accumulator, end: false };
    }

    processedInstructions.add(i);

    switch (operation) {
      case ACC:
        accumulator += argument;
        break;
      case JMP:
        i = i + argument - 1;
        break;
      case NOP:
        break;
      default:
    }
  }

  return { accumulator, end: true };
};

// Puzzle answer: 1179
const part1 = (input) => runProgram(getInstructions(input)).accumulator;

// Puzzle answer: 1089
const part2 = (input) => {
  const instructions = getInstructions(input);

  for (let i = 0; i < instructions.length; i++) {
    const modifiedInstructions = getInstructions(input);
    const { operation } = instructions[i];

    switch (operation) {
      case ACC:
        continue;
      case JMP:
        modifiedInstructions[i].operation = NOP;
        break;
      case NOP:
        modifiedInstructions[i].operation = JMP;
        break;
      default:
    }

    const { accumulator, end } = runProgram(modifiedInstructions);

    if (end) {
      return accumulator;
    }
  }

  return null;
};

module.exports = { part1, part2 };
