import React from 'react';
import SearchIcon from '@/public/svg/SearchIcon';
import NotificationIcon from '@/public/svg/NotificationIcon';

const TopBar = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        minWidth: '100%',
        height: '60px',
        alignItems: 'center'
      }}
    >
      <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#000000' }}>Dashboard</h1>
      <div
        style={{
          display: 'flex',
          columnGap: '30px',
          alignItems: 'center'
        }}
      >
        <div className="input-container">
          <input
            type="text"
            placeholder="Search..."
            style={{ borderRadius: '10px', padding: '6px 0 7px 15px' }}
          />
        </div>
        <NotificationIcon />
        <div style={{ width: '30px', height: '30px' }}>
          <img
            src="https://tecdn.b-cdn.net/img/new/avatars/8.jpg"
            class="h-full w-full max-w-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;


