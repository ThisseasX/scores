import React from 'react';
import { BarChart } from 'components';
import { safari_1 } from 'data/safari_1';

import {
  getColor,
  getTextColor,
  getSeries,
  getLabels,
} from 'utils';

const getCurrentSeries = getSeries(safari_1);
const getCurrentLabels = getLabels(safari_1);

const Safari1 = () => {
  const series = [
    {
      name: 'ΓΡΙΦΟΣ',
      data: getCurrentSeries('riddle'),
    },
    {
      name: 'ΑΝΤΙΚΕΙΜΕΝΟ',
      data: getCurrentSeries('item'),
    },
    {
      name: 'ΘΕΣΗ',
      data: [, , , , , , ...getCurrentSeries('position')],
    },
  ];

  const options = {
    xaxis: {
      categories: [...getCurrentLabels(), 'ΘΕΣΗ'],
    },
  };

  return (
    <BarChart
      id={'chart-safari-1'}
      title={'ΣΑΦΑΡΙ 1'}
      options={options}
      series={series}
      max={460}
      colors={[
        ({ value }) =>
          value > 100
            ? getColor(100, 400)(value)
            : getColor(30, 100)(value),
        ({ value }) => getColor(30, 60)(value),
        ({ value }) => getColor(45, 90)(value),
      ]}
      textColors={[
        props => {
          const { seriesIndex, dataPointIndex } = props;

          return seriesIndex === 0 && dataPointIndex < 2
            ? getTextColor(400)(props)
            : getTextColor(100)(props);
        },
        getTextColor(60),
        getTextColor(90),
      ]}
    />
  );
};

export default Safari1;
