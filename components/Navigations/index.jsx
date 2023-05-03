import React from 'react';
import DashBoardIcon from '@/public/svg/DashBoardIcon';
import TransactionIcon from '@/public/svg/TransactionIcon';
import UserIcon from '@/public/svg/UserIcon';
import SettingIcon from '@/public/svg/SettingIcon';
import ScheduleIcon from '@/public/svg/ScheduleIcon';

const Nagivations = () => {
  return (
    <div style={{ display: 'flex', width: '20%' , height:'990px'}}>
      <div
        style={{
          flexDirection: 'column',
          display: 'flex',
          borderRadius: '30px',
          height: '100%',
          background: '#000000',
          width: '100%',
          padding: '60px 100px 60px 50px',
          justifyContent: 'space-between'
        }}
      >
        <div>
          <h1 style={{ color: '#FFFFFF', fontSize: '36px' }}>Board.</h1>
          <div
            style={{
              display: 'flex',
              rowGap: '40px',
              flexDirection: 'column',
              marginTop: '60px'
              
            }}
          >
            <div style={{ display: 'flex', columnGap: '20px', alignItems: 'center' ,color: '#FFFFFF' }}>
              <DashBoardIcon />
              <a style={{ fontSize: '18px', fontWeight: '700' }}>Dashboard</a>
            </div>
            <div style={{ display: 'flex', columnGap: '20px', alignItems: 'center' ,color: '#FFFFFF' }}>
              <TransactionIcon />
              <a style={{ fontSize: '18px', fontWeight: '700' }}>Transactions</a>
            </div>
            <div style={{ display: 'flex', columnGap: '20px', alignItems: 'center', color: '#FFFFFF' }}>
              <ScheduleIcon />
              <a style={{ fontSize: '18px', fontWeight: '700' }}>Schedules</a>
            </div>
            <div style={{ display: 'flex', columnGap: '20px', alignItems: 'center', color: '#FFFFFF' }}>
              <UserIcon />
              <a style={{ fontSize: '18px', fontWeight: '700' }}>Users</a>
            </div>
            <div style={{ display: 'flex', columnGap: '20px', alignItems: 'center', color: '#FFFFFF' }}>
              <SettingIcon />
              <a style={{ fontSize: '18px', fontWeight: '700' }}>Settings</a>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', rowGap: '20px' ,color: '#FFFFFF', }}>
          <a href="/help" style={{ fontSize: '18px' }}>
            Help
          </a>
          <a href="/Contact" style={{ fontSize: '18px' }}>
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nagivations;
