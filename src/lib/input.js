const fs = require('fs');

const load = (file) => fs.readFileSync(file, 'utf-8');

const toArray = (input) => input.split('\n');

const toGrid = (input) => toArray(input).map((row) => row.split(''));

const toNumberArray = (input) => toArray(input).map(Number);

const toSortedNumberArray = (input) =>
  toNumberArray(input).sort((a, b) => a - b);

module.exports = {
  load,
  toArray,
  toGrid,
  toNumberArray,
  toSortedNumberArray,
};
