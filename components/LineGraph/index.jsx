import React, { useEffect, useState } from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts';

const LineGraph = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/data');
      const data = await res.json();
      setChartData(data);
    }

    fetchData();
  }, []);

  return (
    <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '20px' }}>
      <div
        style={{
          height: '100px',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 20px'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', color: 'black' }}>
          <p style={{ fontWeight: '700' }}>Activities</p>
          <p style={{ color: '#858585' }}>May - June 2021</p>
        </div>
        <div
          style={{ color: 'black', display: 'flex', columnGap: '30px', height: '20px' }}
        >
          <div style={{ display: 'flex', columnGap: '10px', alignItems: 'center' }}>
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#E9A0A0'
              }}
            ></div>
            <p>Guest</p>
          </div>
          <div style={{ display: 'flex', columnGap: '10px', alignItems: 'center' }}>
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#9BDD7C'
              }}
            ></div>
            <p>User</p>
          </div>
        </div>
      </div>
      <LineChart width={1100} height={180} data={chartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#EAEAEA" strokeDasharray="1" />
        <Line dataKey="value" stroke="#9BDD7C" strokeWidth={2} />
        <Line dataKey="key" stroke="#E9A0A0" strokeWidth={2} />
      </LineChart>
    </div>
  );
};

export default LineGraph;
