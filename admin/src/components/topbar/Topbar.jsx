import React from 'react';
import './topbar.scss';

// Material-UI
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbar-wrapper'>
        <div className='topbar-left'>
          <span className='logo'>SITE admin</span>
        </div>
        <div className='topbar-right'>
          <div className='topbar-iconContainer'>
            <NotificationsNone></NotificationsNone>
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbar-iconContainer'>
            <Language></Language>
            <span className='topIconBadge'>2</span>
          </div>
          <div className='topbar-iconContainer'>
            <Settings></Settings>
          </div>
          <img
            src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt='avatar'
            className='topbar-avatar'
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
