import React from 'react';
import Nagivations from '../Navigations';
import TopBar from '../TopBar';
import Cards from '../Cards';
import LineGraph from '../LineGraph';
import ProductPieChart from '../ProductPieChart';

function Dashboard() {
  return (
    <div
      style={{
        display: 'flex',
        padding: '40px',
        background: '#DDDDDD',
        height: '100vh',
        width: '100%'
      }}
    >
      <Nagivations />

      <div style={{ width: '80%', padding: '0 60px 0 60px' }}>
        <TopBar />
        <Cards />
        <LineGraph />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: '30px',
            width: '100%',
            columnGap: '40px'
          }}
        >
          <ProductPieChart />
          {/* /// */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '30px 40px',
              width: '50%'
            }}
          >
            <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  columnGap: '260px'
                }}>      
              <p 
              style={{
                      fontWeight: '700',
                      fontSize: '18px'
                    }}
              > Today’s schedule</p>
              <select 
                    style={{
                            fontWeight: '400',
                            fontSize: '16px', 
                            color:'#858585',
                            background: 'none'
                            }}>
                    <option value="0">See All</option>
              </select>
            </div>

            <div 
                style={{
                  display: 'flex',
                  gap:'20px',
                  marginTop:'30px'
                }}>     
            <div style={{width: '1px', height: '100px', borderLeft: '8px solid #9BDD7C'}}></div>
              <div>
                <p style={{ fontWeight: '700',fontSize: '14px' , color:'#666666', marginTop: '30px'}}>Meeting with suppliers from Kuta Bali</p>
                <p  style={{ fontWeight: '400',fontSize: '14px' , color:'#999999'}}> 14.00-15.00 </p>
                <p  style={{ fontWeight: '400',fontSize: '14px' , color:'#999999' }}> at Sunset Road, Kuta, Bali </p>  
              </div>             
            </div>
               
            <div
              style={{
                  display: 'flex',
                  gap:'20px',
                  marginTop:'30px'
                }}> 
                 <div style={{width: '1px', height: '100px', borderLeft: '8px solid #6972C3'}}></div>
              <div>
                <p style={{ fontWeight: '700',fontSize: '14px' , color:'#666666', marginTop: '30px',}}>Check operation at Giga Factory 1</p>
                <p  style={{ fontWeight: '400',fontSize: '14px' , color:'#999999'}}>18.00-20.00</p>
                <p  style={{ fontWeight: '400',fontSize: '14px' , color:'#999999' }}> at Central Jakarta</p>  
              </div> 
            </div>
          </div>
          {/* //// */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;



