import {
  filter,
  flow,
  clamp,
  sum,
  size,
  map,
  zipAll,
  max,
} from 'lodash/fp';

const clampHue = clamp(0, 120);

const getColor = (offset = 0, max = 100) => value => {
  if (value >= max) return `hsl(120, 90%, 50%)`;
  const v = clamp(offset, max, value) - offset;
  var hue = clampHue((v / (max - offset)) * 70);
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

const getTextColor = max => ({
  seriesIndex,
  dataPointIndex,
  series,
}) =>
  series[seriesIndex][dataPointIndex] / max > 0.5
    ? '#000'
    : '#fff';

const getPercentageValue = (max, decimalPoints = 0) => v =>
  ((v / max) * 100).toFixed(decimalPoints);

const findSeriesMax = series =>
  flow(map('data'), zipAll, map(sum), max)(series);

const getSeries = data => type =>
  flow(filter({ type }), map('value'))(data);

const getLabels = (data, type = 'riddle') => () =>
  flow(filter({ type }), map('label'))(data);

export {
  clampHue,
  getColor,
  get100color,
  getAverage,
  getAverageColor,
  ranges,
  getTextColor,
  getPercentageValue,
  findSeriesMax,
  getSeries,
  getLabels,
};
