import React from 'react';
import { BarChart } from 'components';
import { radio_2 } from 'data/radio_2';

import {
  getColor,
  getTextColor,
  getSeries,
  getLabels,
} from 'utils';

const getCurrentSeries = getSeries(radio_2);
const getCurrentLabels = getLabels(radio_2, 'radio');

const Radio2 = () => {
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
      id={'chart-radio-2'}
      title={'ΡΑΔΙΟ 2'}
      options={options}
      series={series}
      max={500}
      colors={[({ value }) => getColor(200, 500)(value)]}
      textColors={[getTextColor(500)]}
    />
  );
};

export default Radio2;
