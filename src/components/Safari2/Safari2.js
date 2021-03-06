import React from 'react';
import { Grid } from '@material-ui/core';
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
      name: 'ΘΕΣΗ',
      data: getCurrentSeries('position'),
    },
  ];

  const series2 = [
    {
      name: 'ΥΠΟΘΕΣΗ',
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
      <Grid item>
        <BarChart
          id={'chart-safari-2'}
          title={'ΣΑΦΑΡΙ 2'}
          options={options}
          series={series}
          max={240}
          colors={[
            ({ value }) => getColor(50, 150)(value),
            ({ value }) => getColor(45, 90)(value),
          ]}
          textColors={[getTextColor(150), getTextColor(90)]}
        />
      </Grid>

      <Grid item>
        <BarChart
          title={'ΥΠΟΘΕΣΗ'}
          id={'chart-case'}
          options={options2}
          series={series2}
          max={900}
          colors={[
            ({ value }) => getColor(450, 900)(value),
          ]}
          textColors={[getTextColor(900)]}
        />
      </Grid>
    </>
  );
};

export default Safari2;
