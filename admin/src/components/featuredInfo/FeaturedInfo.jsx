import React from 'react';
import './featuredInfo.scss';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

const FeaturedInfo = () => {
  return (
    <div className='featured'>
      <div className='featured-item'>
        <span className='featured-title'>Revenue</span>
        <div className='featured-money_container'>
          <span className='featured-money_container-money'>$2,142</span>
          <span className='featured-money_container-rate'>
            -11.4 <ArrowDownward className="featured-icon negative"/>
          </span>
        </div>
        <span className='featured-sub'>Compared to last month</span>
      </div>
      <div className='featured-item'>
        <span className='featured-title'>Sales</span>
        <div className='featured-money_container'>
          <span className='featured-money_container-money'>$4,456</span>
          <span className='featured-money_container-rate'>
            -1.4 <ArrowDownward className="featured-icon negative"/>
          </span>
        </div>
        <span className='featured-sub'>Compared to last month</span>
      </div>
      <div className='featured-item'>
        <span className='featured-title'>Cost</span>
        <div className='featured-money_container'>
          <span className='featured-money_container-money'>$1,526</span>
          <span className='featured-money_container-rate'>
            +2.5 <ArrowUpward className="featured-icon"/>
          </span>
        </div>
        <span className='featured-sub'>Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
