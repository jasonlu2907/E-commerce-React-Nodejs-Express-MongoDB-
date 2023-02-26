import './widgetSmall.scss';
import { Visibility } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import { userRequest } from '../../requestMethods';

const WidgetSmall = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get('users?new=true');
        // console.log(res.data);
        setUsers(res.data.users);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <div className='widget-small'>
      <span className='widget-small_title'>New Join Members</span>
      <ul className='widget-list'>
        {users.map((user) => (
          <li className='widget-listitem' key={user._id}>
            <img
              src={
                user.img ||
                'https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif'
              }
              alt=''
              className='widget-img'
            />
            <div className='widget-user'>
              <span className='widget-username'>{user.username}</span>
              {/* <span className='widget-jobtitle'>Software Engineer</span> */}
            </div>
            <button className='widget-button'>
              <Visibility className='widget-icon' />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSmall;
