import React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.scss';
import { userData } from '../../dummyData';
import WidgetSmall from '../../components/widgetSmall/WidgetSmall';
import WidgetBig from '../../components/widgetBig/WidgetBig';

const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart
        data={userData}
        title='User Analytics'
        dataKey='Active User'
        grid='3 3'
      />
      <div className="home-widgets">
        <WidgetSmall />
        <WidgetBig />
      </div>
    </div>
  );
};

export default Home;
