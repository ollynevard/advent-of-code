const EMPTY = 'L';
const OCCUPIED = '#';
const FLOOR = '.';
const DIRECTIONS = [
  { x: -1, y: 0 },
  { x: 1, y: 0 },
  { x: 0, y: -1 },
  { x: 0, y: 1 },
  { x: -1, y: -1 },
  { x: -1, y: 1 },
  { x: 1, y: -1 },
  { x: 1, y: 1 },
];

const getSeatLayout = (input) =>
  input.split('\n').map((line) => line.split(''));

const isInBounds = (layout, { x, y }) =>
  x >= 0 && x < layout[0].length && y >= 0 && y < layout.length;

const getViewedSeatCount = (layout, point, viewedSeatDepth) => {
  let count = 0;

  DIRECTIONS.forEach((direction) => {
    let x = point.x + direction.x;
    let y = point.y + direction.y;
    let seatFound = false;
    let depth = 1;

    while (!seatFound && isInBounds(layout, { x, y })) {
      switch (layout[y][x]) {
        case OCCUPIED:
          seatFound = true;
          count += 1;
          break;
        case EMPTY:
          seatFound = true;
          break;
        default:
      }

      if (viewedSeatDepth === depth) {
        break;
      }

      x += direction.x;
      y += direction.y;
      depth += 1;
    }
  });

  return count;
};

const layoutsEqual = (layout1, layout2) =>
  JSON.stringify(layout1) === JSON.stringify(layout2);

const countOccupiedSeats = (layout) =>
  layout.reduce(
    (count, row) =>
      count +
      row.reduce(
        (rowCount, item) => (item === OCCUPIED ? rowCount + 1 : rowCount),
        0
      ),
    0
  );

const applyChanges = (layout, viewedSeatLimit, viewedSeatDepth) => {
  const updatedLayout = [...layout].map((row) => [...row]);

  for (let y = 0; y < layout.length; y++) {
    for (let x = 0; x < layout[0].length; x++) {
      const viewedSeatCount = getViewedSeatCount(
        layout,
        { x, y },
        viewedSeatDepth
      );

      if (updatedLayout[y][x] !== FLOOR) {
        if (viewedSeatCount === 0) {
          updatedLayout[y][x] = OCCUPIED;
        }

        if (viewedSeatCount >= viewedSeatLimit) {
          updatedLayout[y][x] = EMPTY;
        }
      }
    }
  }

  return updatedLayout;
};

// Puzzle answer: 2481
const part1 = (input) => {
  let previousLayout;
  let updatedLayout = getSeatLayout(input);

  do {
    previousLayout = updatedLayout;
    updatedLayout = applyChanges(previousLayout, 4, 1);
  } while (!layoutsEqual(previousLayout, updatedLayout));

  return countOccupiedSeats(updatedLayout);
};

// Puzzle answer: 2227
const part2 = (input) => {
  let previousLayout;
  let updatedLayout = getSeatLayout(input);

  do {
    previousLayout = updatedLayout;
    updatedLayout = applyChanges(previousLayout, 5, null);
  } while (!layoutsEqual(previousLayout, updatedLayout));

  return countOccupiedSeats(updatedLayout);
};

module.exports = { part1, part2 };
