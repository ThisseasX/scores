import React from 'react';
import { BarChart } from 'components';
import { safari_3 } from 'data/safari_3';

import {
  getColor,
  getTextColor,
  getSeries,
  getLabels,
} from 'utils';

const getCurrentSeries = getSeries(safari_3);
const getCurrentLabels = getLabels(safari_3);

const Safari3 = () => {
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
      data: getCurrentSeries('position'),
    },
  ];

  const options = {
    xaxis: {
      categories: getCurrentLabels(),
    },
  };

  return (
    <BarChart
      id={'chart-safari-3'}
      title={'ΣΑΦΑΡΙ 3'}
      options={options}
      series={series}
      max={350}
      colors={[
        ({ value }) => getColor(100, 200)(value),
        ({ value }) => getColor(20, 60)(value),
        ({ value }) => getColor(45, 90)(value),
      ]}
      textColors={[
        getTextColor(200),
        getTextColor(60),
        getTextColor(90),
      ]}
    />
  );
};

export default Safari3;
