import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';

/**
 * Data for the chart.
 */
const data = [
  { name: 'Jan 2024', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb 2024', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar 2024', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr 2024', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May 2024', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun 2024', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul 2024', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Aug 2024', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Sep 2024', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Oct 2024', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Nov 2024', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Dec 2024', uv: 3490, pv: 4300, amt: 2100 },
];

/**
 * Curve type for the area chart.
 */
const cardinal = curveCardinal.tension(0.2);

/**
 * Custom tick component for the XAxis.
 * 
 * @param {object} props - The properties for the tick component.
 * @returns {JSX.Element} The rendered custom tick component.
 */
const CustomXAxisTick = (props: any): JSX.Element => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={10} textAnchor="end" fontSize="12" fontStyle="italic" fill="#666" transform="rotate(-30)">
        {payload.value}
      </text>
    </g>
  );
};

/**
 * Formatter function for the YAxis ticks.
 * 
 * @param {number} value - The tick value.
 * @returns {string} The formatted tick value.
 */
const yAxisTickFormatter = (value: number): string => {
  return `${value / 1000}K`;
};

/**
 * Example component that renders an area chart.
 * 
 * @returns {JSX.Element} The rendered area chart component.
 */
const Example: React.FC = (): JSX.Element => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={<CustomXAxisTick />} tickCount={data.length} interval={1} />
        <YAxis tickFormatter={yAxisTickFormatter} />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#482C48" fill="#9A8E9A" fillOpacity={0.3} />
        <Area type={cardinal} dataKey="uv" stroke="#482C48" fill="#482C48" fillOpacity={0.3} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Example;
