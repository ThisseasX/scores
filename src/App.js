import React from 'react';
import Chart from 'react-apexcharts';
import {
  getColor,
  getAverageColor,
  getTextColor,
} from './utils';

const getPercentageRiddle = v =>
  ((v / 200) * 100).toFixed(2);
const getPercentageItem = v => ((v / 60) * 100).toFixed(2);
const getPercentageSpeed = v => ((v / 90) * 100).toFixed(2);

const App = () => {
  const series = [
    {
      name: 'ΓΡΙΦΟΣ',
      // data: [200, 200, 200, 200].map(getPercentageRiddle),
      data: [200, 200, 200, 200],
    },
    {
      name: 'ΑΝΤΙΚΕΙΜΕΝΟ',
      // data: [60, 45, 60, 60].map(getPercentageItem),
      data: [60, 45, 60, 60],
    },
    {
      name: 'ΘΕΣΗ',
      // data: [78, 87, 84, 87].map(getPercentageSpeed),
      data: [78, 87, 84, 87],
    },
  ];

  const options = {
    chart: {
      id: 'basic-bar',
      stacked: true,
    },

    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 4,
      },
    },

    xaxis: {
      categories: [
        'ΓΡΙΦΟΣ 1',
        'ΓΡΙΦΟΣ 2',
        'ΓΡΙΦΟΣ 3',
        'ΓΡΙΦΟΣ 4',
      ],
    },

    yaxis: {
      // max: 100,
    },

    stroke: {
      colors: ['#000'],
      width: 1,
    },

    colors: [
      ({ value }) => getColor(30, 200)(value),
      ({ value }) => getColor(15, 60)(value),
      ({ value }) => getColor(30, 90)(value),
    ],

    dataLabels: {
      style: {
        colors: [
          getTextColor(200),
          getTextColor(60),
          getTextColor(90),
        ],
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

  return (
    <div>
      <div>
        <div>
          <Chart
            options={options}
            series={series}
            type="bar"
            height={`${
              series[0].data.length * 40 * (100 / 70) +
              67.02
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
