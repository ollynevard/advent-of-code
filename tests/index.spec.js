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
      const solutions = require(dayPath);
      const allTests = require(testPath);

      describe(`Day ${day}`, () => {
        allTests.forEach((tests, part) => {
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
