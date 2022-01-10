import './widgetSmall.scss';
import { Visibility } from '@material-ui/icons';

const WidgetSmall = () => {
  return (
    <div className='widget-small'>
      <span className='widget-small_title'>New Join Members</span>
      <ul className='widget-list'>
        <li className='widget-listitem'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widget-img'
          />
          <div className='widget-user'>
            <span className='widget-username'>Anna Keller</span>
            <span className='widget-jobtitle'>Software Engineer</span>
          </div>
          <button className='widget-button'>
            <Visibility className="widget-icon" />
            Display
          </button>
        </li>
        <li className='widget-listitem'>
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=''
            className='widget-img'
          />
          <div className='widget-user'>
            <span className='widget-username'>Anna Keller</span>
            <span className='widget-jobtitle'>Software Engineer</span>
          </div>
          <button className='widget-button'>
            <Visibility className="widget-icon" />
            Display
          </button>
        </li>
        <li className='widget-listitem'>
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=''
            className='widget-img'
          />
          <div className='widget-user'>
            <span className='widget-username'>Anna Keller</span>
            <span className='widget-jobtitle'>Software Engineer</span>
          </div>
          <button className='widget-button'>
            <Visibility className="widget-icon" />
            Display
          </button>
        </li>
        <li className='widget-listitem'>
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=''
            className='widget-img'
          />
          <div className='widget-user'>
            <span className='widget-username'>Anna Keller</span>
            <span className='widget-jobtitle'>Software Engineer</span>
          </div>
          <button className='widget-button'>
            <Visibility className="widget-icon" />
            Display
          </button>
        </li>
        <li className='widget-listitem'>
          <img
            src='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widget-img'
          />
          <div className='widget-user'>
            <span className='widget-username'>Anna Keller</span>
            <span className='widget-jobtitle'>Software Engineer</span>
          </div>
          <button className='widget-button'>
            <Visibility className="widget-icon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSmall;
