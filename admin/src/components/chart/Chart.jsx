import React from 'react';
import './chart.scss';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';


const Chart = ({data, title, dataKey, grid}) => {
  
  return (
    <div className='chart'>
      <h3 className='chart-title'>{title}</h3>
      <ResponsiveContainer width='100%' height='100%' aspect={4 / 1}>
        <LineChart data={data}>
          {grid && <CartesianGrid strokeDasharray='3 3' />}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type='monotone'
            dataKey={dataKey}
            stroke='#8884d8'
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
