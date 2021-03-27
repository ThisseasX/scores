import React from 'react';
import { BarChart } from 'components';
import { safari_1 } from 'data/safari_1';

import {
  getColor,
  getTextColor,
  getSeries,
  getLabels,
  partition,
} from 'utils';

const getCurrentSeries = getSeries(safari_1);
const getCurrentLabels = getLabels(safari_1);

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
    {
      name: 'ΘΕΣΗ',
      data: [
        ,
        ,
        ,
        ,
        ...getCurrentSeries('position').slice(2),
      ],
    },
  ];

  const options = {
    xaxis: {
      categories: getCurrentLabels().slice(0, 2),
    },
  };

  const options2 = {
    xaxis: {
      categories: [...getCurrentLabels().slice(2), 'ΘΕΣΗ'],
    },
  };

  return (
    <>
      <BarChart
        id={'chart-safari-1-packs'}
        title={'ΣΑΦΑΡΙ 1'}
        options={options}
        series={series}
        max={460}
        colors={[
          ({ value }) => getColor(100, 400)(value),
          ({ value }) => getColor(30, 60)(value),
        ]}
        textColors={[getTextColor(400), getTextColor(60)]}
      />

      <BarChart
        id={'chart-safari-1'}
        title={'ΣΑΦΑΡΙ 1'}
        options={options2}
        series={series2}
        max={160}
        colors={[
          ({ value }) => getColor(30, 100)(value),
          ({ value }) => getColor(30, 60)(value),
          ({ value }) => getColor(45, 90)(value),
        ]}
        textColors={[
          getTextColor(100),
          getTextColor(60),
          getTextColor(90),
        ]}
      />
    </>
  );
};

export default Safari1;
