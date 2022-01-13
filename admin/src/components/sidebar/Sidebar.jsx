import React from 'react';
import './sidebar.scss';
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-wrapper'>
        <div className='sidebar-menu'>
          <h3 className='sidebar-title'>Dashboard</h3>
          <ul className='sidebar-list'>
            <li className='sidebar-list_item active'>
              <LineStyle className='sidebar-icon' />
              Home
            </li>
            <li className='sidebar-list_item'>
              <Timeline className='sidebar-icon' />
              Analytics
            </li>
            <li className='sidebar-list_item'>
              <TrendingUp className='sidebar-icon' />
              Sales
            </li>
          </ul>
        </div>
        <div className='sidebar-menu'>
          <h3 className='sidebar-title'>Quick Menu</h3>
          <ul className='sidebar-list'>
            <Link to='/users' className="link">
              <li className='sidebar-list_item '>
                <PermIdentity className='sidebar-icon' />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className='sidebar-list_item'>
                <Storefront className='sidebar-icon' />
                Products
              </li>
            </Link>
            <li className='sidebar-list_item'>
              <AttachMoney className='sidebar-icon' />
              Transactions
            </li>
            <li className='sidebar-list_item'>
              <BarChart className='sidebar-icon' />
              Reports
            </li>
          </ul>
        </div>
        <div className='sidebar-menu'>
          <h3 className='sidebar-title'>Notifications</h3>
          <ul className='sidebar-list'>
            <li className='sidebar-list_item '>
              <MailOutline className='sidebar-icon' />
              Mail
            </li>
            <li className='sidebar-list_item'>
              <DynamicFeed className='sidebar-icon' />
              Feedbacks
            </li>
            <li className='sidebar-list_item'>
              <ChatBubbleOutline className='sidebar-icon' />
              Messages
            </li>
          </ul>
        </div>
        <div className='sidebar-menu'>
          <h3 className='sidebar-title'>Staff</h3>
          <ul className='sidebar-list'>
            <li className='sidebar-list_item '>
              <WorkOutline className='sidebar-icon' />
              Manage
            </li>
            <li className='sidebar-list_item'>
              <Timeline className='sidebar-icon' />
              Analytics
            </li>
            <li className='sidebar-list_item'>
              <Report className='sidebar-icon' />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
