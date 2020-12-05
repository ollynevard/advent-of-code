const parseSeatRef = (ref) => {
  const match = ref.match(/^((F|B){7})((R|L){3})$/);

  if (!match) {
    throw new Error(`Invalid seat reference '${ref}'`);
  }

  const row = parseInt(match[1].replace(/F/g, 0).replace(/B/g, 1), 2);
  const column = parseInt(match[3].replace(/L/g, 0).replace(/R/g, 1), 2);

  return row * 8 + column;
};

const getSeatNumbers = (input) =>
  input.split('\n').map((ref) => parseSeatRef(ref));

// Puzzle answer: 965
const part1 = (input) => {
  return Math.max(...getSeatNumbers(input));
};

// Puzzle answer: 524
const part2 = (input) => {
  const seatNumbers = getSeatNumbers(input);
  const min = Math.min(...seatNumbers);
  const max = Math.max(...seatNumbers);
  const fullList = Array.from(Array(max - min), (v, i) => i + min);

  return fullList.filter((i) => !seatNumbers.includes(i));
};

module.exports = { part1, part2 };
