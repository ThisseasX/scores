import React from 'react';
import Chart from 'react-apexcharts';
import { merge } from 'lodash/fp';
import { getAverageColor, findSeriesMax } from 'utils';

const BarChart = ({
  id = 'basic-bar',
  title,
  series,
  options = {},
  colors,
  textColors,
}) => {
  const defaultOptions = {
    title: {
      text: title,
      floating: true,
      align: 'center',
    },

    chart: {
      id,
      stacked: true,
    },

    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 4,
      },
    },

    stroke: {
      colors: ['#000'],
      width: 1,
    },

    yaxis: {
      max: findSeriesMax(series),
    },

    colors,

    dataLabels: {
      style: {
        colors: textColors,
      },
    },

    tooltip: {
      style: {
        fontSize: '14px',
      },
      y: {
        title: {
          formatter: seriesName => seriesName + ':',
        },
      },
    },

    legend: {
      markers: {
        fillColors: series.map(({ data }) =>
          getAverageColor(data),
        ),
      },
    },
  };

  const finalOptions = merge(defaultOptions, options);

  return (
    <Chart
      options={finalOptions}
      series={series}
      type="bar"
      width={'768'}
      height={`${
        series[0].data.length * 40 * (100 / 70) + 67.02
      }`}
    />
  );
};

export default BarChart;