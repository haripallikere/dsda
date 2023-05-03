import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Basic Test', value: 700 },
  { name: 'Custom Short Pants', value: 350 },
  { name: 'Super Hoodies', value: 150 }   
];

const ProductPieChart = () => {
  const COLORS = ['#98D89E', '#F6DC7D', '#EE8484'];
  return (
    <div
      style={{
        background: '#FFFFFF',
        borderRadius: '20px',
        padding: '30px 40px',
        width: '50%'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2 style={{ color: 'black' , fontSize: '18px', fontWeight: '700'}}>Top products</h2>
        <select style={{ color: '#858585', background: 'none' }}>
          <option value="0">May - June 2021</option>
        </select>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx={80}
            cy={100}
            labelLine={false}
            outerRadius={80}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <div
          style={{
            color: 'black',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '25px'
          }}
        >
          <div
            style={{
              color: 'black',
              display: 'flex',
              alignItems: 'center',
              columnGap: '10px'
            }}
          >
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#98D89E'
              }}
            ></div>
            <p style={{ fontWeight: '700' }}>{data[0].name}</p>
          </div>
          <div
            style={{
              color: 'black',
              display: 'flex',
              alignItems: 'center',
              columnGap: '10px'
            }}
          >
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#F6DC7D'
              }}
            ></div>
            <p style={{ fontWeight: '700' }}> {data[1].name}</p>
          </div>

          <div
            style={{
              color: 'black',
              display: 'flex',
              alignItems: 'center',
              columnGap: '10px'
            }}
          >
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#EE8484'
              }}
            ></div>
            <p style={{ fontWeight: '700' }}>{data[2].name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default ProductPieChart;
