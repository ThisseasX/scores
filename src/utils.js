import { flow, clamp, sum, size } from 'lodash/fp';

const clampHue = clamp(0, 120);

const getColor = (offset = 0, max = 100) => value => {
  const v = clamp(offset, max, value) - offset;
  var hue = clampHue((v / (max - offset)) * 120);
  return `hsl(${hue}, 90%, 50%)`;
};

const get100color = getColor(30, 100);

const ranges = Array(101)
  .fill()
  .map((_, i) => getColor(i))
  .map((color, i) => ({
    from: i,
    to: i,
    color,
  }));

const getAverage = arr => sum(arr) / size(arr);

const getAverageColor = arr =>
  flow(getAverage, getColor)(arr);

export {
  clampHue,
  getColor,
  get100color,
  getAverage,
  getAverageColor,
  ranges,
};
