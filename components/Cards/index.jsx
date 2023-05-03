import React from 'react';
import ShutterIcon from '@/public/svg/Shutter';
import TagIcon from '@/public/svg/Tag';
import ThumbIcon from '@/public/svg/ThumIcon';
import UsersIcon from '@/public/svg/UsersIcon';

const Cards = () => {
  return (
    <div
      style={{
        minHeight: '120px',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '40px 0 30px 0'
      }}
    >
      <div
        style={{
          display: 'flex',
          background: '#caebcf',
          width: '222px',
          borderRadius: '20px',
          justifyContent: 'space-around'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '25px',
            color: 'black'
          }}
        >
          <p>Total Revenues</p>
          <p style={{ fontSize: '24px', fontWeight: '700' }}>$2,129,430</p>
        </div>
        <div style={{ padding: '20px 10px 0 0' }}>
          <ShutterIcon />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          background: '#e8dac1',
          width: '222px',
          borderRadius: '20px',
          justifyContent: 'space-around'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '25px',
            color: 'black'
          }}
        >
          <p>Total Transactions</p>
          <p style={{ fontSize: '24px', fontWeight: '700' }}>1,520</p>
        </div>
        <div style={{ padding: '20px 10px 0 0' }}>
          <TagIcon />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          background: '#edcaca',
          width: '222px',
          borderRadius: '20px',
          justifyContent: 'space-around'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '25px',
            color: 'black'
          }}
        >
          <p>Total Likes</p>
          <p style={{ fontSize: '24px', fontWeight: '700' }}>9,721</p>
        </div>
        <div style={{ padding: '20px 10px 0 0' }}>
          <ThumbIcon />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          background: '#ced2f0',
          width: '222px',
          borderRadius: '20px',
          justifyContent: 'space-around'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '25px',
            color: 'black'
          }}
        >
          <p>Total Users</p>
          <p style={{ fontSize: '24px', fontWeight: '700' }}>892</p>
        </div>
        <div style={{ padding: '20px 10px 0 0' }}>
          <UsersIcon />
        </div>
      </div>
    </div>
  );
};

export default Cards;
