import React from 'react';
import { BarChart } from 'components';
import { radio_1 } from 'data/radio_1';

import {
  getColor,
  getTextColor,
  getSeries,
  getLabels,
} from 'utils';

const getCurrentSeries = getSeries(radio_1);
const getCurrentLabels = getLabels(radio_1, 'radio');

const Radio1 = () => {
  const series = [
    {
      name: 'ΡΑΔΙΟ',
      data: getCurrentSeries('radio'),
    },
  ];

  const options = {
    xaxis: {
      categories: getCurrentLabels(),
    },
  };

  return (
    <BarChart
      id={'chart-radio-1'}
      title={'ΡΑΔΙΟ 1'}
      options={options}
      series={series}
      max={500}
      colors={[({ value }) => getColor(200, 500)(value)]}
      textColors={[getTextColor(500)]}
    />
  );
};

export default Radio1;
