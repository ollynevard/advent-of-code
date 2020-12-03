const { toGrid } = require('../../../lib/input');

const countTrees = (map, right, down) => {
  return map.reduce(
    (count, row, index) =>
      count +
      (index % down === 0 &&
        row[((index / down) * right) % row.length] === '#'),
    0
  );
};

// Puzzle answer: 237
const part1 = (input) => countTrees(toGrid(input), 3, 1);

// Puzzle answer: 2106818610
const part2 = (input) => {
  return [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ].reduce(
    (count, [right, down]) => count * countTrees(toGrid(input), right, down),
    1
  );
};

module.exports = { part1, part2 };
