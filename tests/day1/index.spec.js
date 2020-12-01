const { assert } = require('chai');
const { part1, part2 } = require('../../src/day1');

describe('Day 1', () => {
  const input = '1721\n979\n366\n299\n675\n1456';

  describe('Part 1', () => {
    it('returns the product of the 2 entries that add up to 2020', () => {
      assert.equal(part1(input), 514579);
    });
  });

  describe('Part 2', () => {
    it('returns the product of the 3 entries that add up to 2020', () => {
      assert.equal(part2(input), 241861950);
    });
  });
});
