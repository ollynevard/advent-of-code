const { toArray } = require('../../../lib/input');

const countTrees = (map, right, down) => {
  const width = map[0].length;
  const height = map.length;
  const maxWidth = right * Math.ceil(height / down) + 1;
  const repeat = Math.ceil(maxWidth / width);
  const fullMap = map.map((row) => row.repeat(repeat).split(''));

  return fullMap.reduce(
    (count, row, index) => (row[index * right] === '#' ? count + 1 : count),
    0
  );
};

// Puzzle answer: 237
const part1 = (input) => {
  return countTrees(toArray(input), 3, 1);
};

// Puzzle answer: 2106818610
const part2 = (input) => {
  const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];

  return slopes.reduce((treeCount, coords) => {
    return treeCount * countTrees(toArray(input), coords[0], coords[1]);
  }, 1);
};

module.exports = { part1, part2 };
