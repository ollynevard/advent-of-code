const NORTH = 'N';
const SOUTH = 'S';
const EAST = 'E';
const WEST = 'W';
const LEFT = 'L';
const RIGHT = 'R';
const FORWARD = 'F';
const DIRECTIONS = [NORTH, EAST, SOUTH, WEST];

const getInstructions = (input) =>
  input.split('\n').map((line) => {
    const [, action, value] = line.match(/^([NSEWLRF])(\d+)$/);
    return { action, value: Number(value) };
  });

const move = (direction, value, point) => {
  let { x, y } = point;

  switch (direction) {
    case NORTH:
      y += value;
      break;
    case SOUTH:
      y -= value;
      break;
    case EAST:
      x += value;
      break;
    case WEST:
      x -= value;
      break;
    default:
  }

  return { x, y };
};

// https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
const modulus = (a, b) => ((a % b) + b) % b;

const changeDirection = (direction, degrees) =>
  DIRECTIONS[
    modulus(degrees / 90 + DIRECTIONS.indexOf(direction), DIRECTIONS.length)
  ];

const rotate = (point, degrees) => {
  const { x, y } = point;
  const radians = -degrees * (Math.PI / 180);
  const cos = Math.cos(radians);
  const sin = Math.sin(radians);

  return {
    x: Math.round(10000 * (x * cos - y * sin)) / 10000,
    y: Math.round(10000 * (x * sin + y * cos)) / 10000,
  };
};

const getManhattanDistance = (point) => Math.abs(point.x) + Math.abs(point.y);

// Puzzle answer: 582
const part1 = (input) => {
  const instructions = getInstructions(input);
  let direction = EAST;
  let shipPosition = { x: 0, y: 0 };

  instructions.forEach(({ action, value }) => {
    switch (action) {
      case NORTH:
      case SOUTH:
      case EAST:
      case WEST:
        shipPosition = move(action, value, shipPosition);
        break;
      case LEFT:
        direction = changeDirection(direction, -value);
        break;
      case RIGHT:
        direction = changeDirection(direction, value);
        break;
      case FORWARD:
        shipPosition = move(direction, value, shipPosition);
        break;
      default:
    }
  });

  return getManhattanDistance(shipPosition);
};

// Puzzle answer:
const part2 = (input) => {
  const instructions = getInstructions(input);
  let shipPosition = { x: 0, y: 0 };
  let waypointPosition = { x: 10, y: 1 };

  instructions.forEach(({ action, value }) => {
    switch (action) {
      case NORTH:
      case SOUTH:
      case EAST:
      case WEST:
        waypointPosition = move(action, value, waypointPosition);
        break;
      case LEFT:
        waypointPosition = rotate(waypointPosition, -value);
        break;
      case RIGHT:
        waypointPosition = rotate(waypointPosition, value);
        break;
      case FORWARD:
        shipPosition = {
          x: shipPosition.x + waypointPosition.x * value,
          y: shipPosition.y + waypointPosition.y * value,
        };
        break;
      default:
    }
  });

  return getManhattanDistance(shipPosition);
};

module.exports = { part1, part2 };
