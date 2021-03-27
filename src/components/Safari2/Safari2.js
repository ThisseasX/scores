import React from 'react';
import { BarChart } from 'components';
import { safari_2 } from 'data/safari_2';

import {
  getColor,
  getTextColor,
  getSeries,
  getLabels,
} from 'utils';

const getCurrentSeries = getSeries(safari_2);
const getCurrentLabels = getLabels(safari_2);

const Safari2 = () => {
  const series = [
    {
      name: 'ΓΡΙΦΟΣ',
      data: getCurrentSeries('riddle'),
    },
    {
      name: 'ΑΝΤΙΚΕΙΜΕΝΟ',
      data: getCurrentSeries('position'),
    },
  ];

  const series2 = [
    {
      name: 'ΘΕΣΗ',
      data: getCurrentSeries('case'),
    },
  ];

  const options = {
    xaxis: {
      categories: getCurrentLabels(),
    },
  };

  const options2 = {
    xaxis: {
      categories: ['ΥΠΟΘΕΣΗ'],
    },
  };

  return (
    <>
      <BarChart
        id={'chart-safari-1'}
        title={'ΣΑΦΑΡΙ 2'}
        options={options}
        series={series}
        max={240}
        colors={[
          ({ value }) => getColor(100, 150)(value),
          ({ value }) => getColor(45, 90)(value),
        ]}
        textColors={[getTextColor(150), getTextColor(90)]}
      />

      <BarChart
        id={'chart-safari-2'}
        options={options2}
        series={series2}
        max={900}
        colors={[({ value }) => getColor(450, 900)(value)]}
        textColors={[getTextColor(900)]}
      />
    </>
  );
};

export default Safari2;
