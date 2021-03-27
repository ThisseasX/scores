import React from 'react';
import { BarChart } from 'components';
import { police_department } from 'data/police_department';
import { getColor, getTextColor, getSeries } from 'utils';

const getCurrentSeries = getSeries(police_department);

const PoliceDepartment = () => {
  const series = [
    {
      name: 'ΡΑΔΙΟ',
      data: getCurrentSeries('case'),
    },
  ];

  const options = {
    xaxis: {
      categories: ['ΥΠΟΘΕΣΗ'],
    },
  };

  return (
    <BarChart
      id={'chart-pd'}
      title={'Κ.Χ.Θ. POLICE DEPARTMENT'}
      options={options}
      series={series}
      max={900}
      colors={[({ value }) => getColor(300, 900)(value)]}
      textColors={[getTextColor(900)]}
    />
  );
};

export default PoliceDepartment;
