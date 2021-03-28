import React from 'react';
import { BarChart } from 'components';
import { photo } from 'data/photo';

import {
  getColor,
  getTextColor,
  getSeries,
  getLabels,
} from 'utils';

const getCurrentSeries = getSeries(photo);
const getCurrentLabels = getLabels(photo, 'photo');

const Photo = () => {
  const series = [
    {
      name: 'ΦΩΤΟ',
      data: getCurrentSeries('photo'),
    },
  ];

  const options = {
    xaxis: {
      categories: getCurrentLabels(),
    },
  };

  return (
    <BarChart
      id={'chart-photo'}
      title={'ΦΩΤΟ'}
      options={options}
      series={series}
      max={500}
      colors={[({ value }) => getColor(200, 500)(value)]}
      textColors={[getTextColor(500)]}
    />
  );
};

export default Photo;
