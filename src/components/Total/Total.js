import React from 'react';
import { BarChart } from 'components';
import { total } from 'data/total';

import {
  getColor,
  getTextColor,
  getSeries,
  getLabels,
} from 'utils';

const getCurrentSeries = getSeries(total);
const getCurrentLabels = getLabels(total, 'total');

const Total = () => {
  const series = [
    {
      name: 'ΣΥΝΟΛΟ',
      data: getCurrentSeries('total'),
    },
  ];

  const options = {
    xaxis: {
      categories: getCurrentLabels(),
    },
  };

  return (
    <BarChart
      id={'chart-total'}
      title={'ΣΥΝΟΛΟ'}
      options={options}
      series={series}
      max={7734}
      colors={[({ value }) => getColor(200, 7734)(value)]}
      textColors={[getTextColor(7734)]}
    />
  );
};

export default Total;
