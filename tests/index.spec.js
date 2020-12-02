/* eslint-disable mocha/no-setup-in-describe */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');
const { assert } = require('chai');

const puzzlePath = path.join(__dirname, '../src/puzzles');

fs.readdirSync(puzzlePath).forEach((year) => {
  const yearPath = path.join(puzzlePath, year);

  describe(year, () => {
    fs.readdirSync(yearPath).forEach((day) => {
      const dayPath = path.join(yearPath, day);
      const testPath = path.join(dayPath, 'test');
      const { part1, part2 } = require(dayPath);
      const { input, part1Answer, part2Answer } = require(testPath);

      describe(`Day ${day}`, () => {
        it('Part 1', () => {
          assert.equal(part1(input), part1Answer);
        });

        it('Part 2', () => {
          assert.equal(part2(input), part2Answer);
        });
      });
    });
  });
});
