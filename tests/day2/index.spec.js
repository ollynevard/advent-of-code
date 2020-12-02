const { assert } = require('chai');
const { part1, part2 } = require('../../src/day2');

describe('Day 2', () => {
  const input = '1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc';

  describe('Part 1', () => {
    it('returns the number of passwords that contain the given letter the valid number of times', () => {
      assert.equal(part1(input), 2);
    });
  });

  describe('Part 2', () => {
    it('returns the number of passwords that contain the given letter in one of the valid positions', () => {
      assert.equal(part2(input), 1);
    });
  });
});
