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
const getCurrentPositionLabels = getLabels(
  safari_1,
  'position',
);

const Safari1 = () => {
  const series = [
    {
      name: 'ΓΡΙΦΟΣ',
      data: getCurrentSeries('riddle').slice(0, 2),
    },
    {
      name: 'ΑΝΤΙΚΕΙΜΕΝΟ',
      data: getCurrentSeries('item').slice(0, 2),
    },
  ];

  const series2 = [
    {
      name: 'ΓΡΙΦΟΣ',
      data: getCurrentSeries('riddle').slice(2),
    },
    {
      name: 'ΑΝΤΙΚΕΙΜΕΝΟ',
      data: getCurrentSeries('item').slice(2),
    },
  ];

  const series3 = [
    {
      name: 'ΘΕΣΗ',
      data: getCurrentSeries('position'),
    },
  ];

  const options = {
    xaxis: {
      categories: getCurrentLabels().slice(0, 2),
    },
  };

  const options2 = {
    xaxis: {
      categories: getCurrentLabels().slice(2),
    },
  };

  const options3 = {
    xaxis: {
      categories: getCurrentPositionLabels(),
    },
  };

  return (
    <>
      <BarChart
        id={'chart-safari-1-packs'}
        title={'ΣΑΦΑΡΙ 1'}
        subtitle={'PACKS'}
        options={options}
        series={series}
        max={460}
        colors={[
          ({ value }) => getColor(200, 400)(value),
          ({ value }) => getColor(30, 60)(value),
        ]}
        textColors={[getTextColor(400), getTextColor(60)]}
      />

      <BarChart
        id={'chart-safari-1-riddles'}
        title={'ΣΑΦΑΡΙ 1'}
        subtitle={'ΓΡΙΦΟΙ'}
        options={options2}
        series={series2}
        max={160}
        colors={[
          ({ value }) => getColor(30, 100)(value),
          ({ value }) => getColor(30, 60)(value),
        ]}
        textColors={[getTextColor(100), getTextColor(60)]}
      />

      <BarChart
        id={'chart-safari-1-position'}
        title={'ΣΑΦΑΡΙ 1'}
        subtitle={'ΘΕΣΗ'}
        options={options3}
        series={series3}
        max={90}
        colors={[({ value }) => getColor(45, 90)(value)]}
        textColors={[getTextColor(90)]}
      />
    </>
  );
};

export default Safari1;
