/* eslint-disable mocha/no-setup-in-describe */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');
const { assert } = require('chai');

const { YEAR, DAY, PART } = process.env;
const puzzlePath = path.join(__dirname, '../src/puzzles');

fs.readdirSync(puzzlePath).forEach((year) => {
  if (YEAR !== 'undefined' && YEAR !== year) {
    return;
  }

  const yearPath = path.join(puzzlePath, year);

  describe(year, () => {
    fs.readdirSync(yearPath).forEach((day) => {
      if (DAY !== 'undefined' && DAY !== day) {
        return;
      }

      const dayPath = path.join(yearPath, day);
      const testPath = path.join(dayPath, 'test');
      const solutions = require(dayPath);
      const allTests = require(testPath);

      describe(`Day ${day}`, () => {
        allTests.forEach((tests, part) => {
          if (PART !== 'undefined' && PART !== String(part + 1)) {
            return;
          }

          describe(`Part ${part + 1}`, () => {
            tests.forEach((test, index) => {
              it(`Test ${index + 1}: Expected ${test.expected}`, () => {
                assert.equal(
                  solutions[`part${part + 1}`](test.input),
                  test.expected
                );
              });
            });
          });
        });
      });
    });
  });
});
