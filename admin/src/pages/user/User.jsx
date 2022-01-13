import './user.scss';
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <div className='user'>
      <div className='user-title_container'>
        <h1 className='title'>Edit User</h1>
        <Link to='/newUser'>
          <button className='user-addBtn'>Create</button>
        </Link>
      </div>

      <div className='user-container'>
        <div className='user-show'>
          {/* TOP of the user detail information */}
          <div className='user-show--top'>
            <img
              src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
              className='user-show--img'
            />
            <div className='user-show--top_title'>
              <span className='user-show--username'>Anna Hatthaway</span>
              <span className='user-show--jobtitle'>Software Engineer</span>
            </div>
          </div>

          {/* BOTTOM of the user detail information */}
          <div className='user-show--bottom'>
            <span className='user-show--bottom_title'>Account Details</span>
            <div className='user-show--bottom_infoContainer'>
              <PermIdentity className='user-show--bottom_icon' />
              <span className='user-show--bottom_infoTitle'>annahat99</span>
            </div>

            <div className='user-show--bottom_infoContainer'>
              <CalendarToday className='user-show--bottom_icon' />
              <span className='user-show--bottom_infoTitle'>10.12.1999</span>
            </div>

            <span className='user-show--bottom_title'>Contact Details</span>

            <div className='user-show--bottom_infoContainer'>
              <PhoneAndroid className='user-show--bottom_icon' />
              <span className='user-show--bottom_infoTitle'>+1 123 456 67</span>
            </div>
            <div className='user-show--bottom_infoContainer'>
              <MailOutline className='user-show--bottom_icon' />
              <span className='user-show--bottom_infoTitle'>
                annahat99@gmail.com
              </span>
            </div>
            <div className='user-show--bottom_infoContainer'>
              <LocationSearching className='user-show--bottom_icon' />
              <span className='user-show--bottom_infoTitle'>
                New York | USA
              </span>
            </div>
          </div>
        </div>

        <div className='user-update'>
          <span className='user-update--title'>Edit</span>
          <form className='user-update--form'>
            <div className='user-update--left'>
              <div className='user-update--item'>
                <label htmlFor=''>Username</label>
                <input
                  type='text'
                  placeholder='annahat99'
                  className='user-update--input'
                />
              </div>
              <div className='user-update--item'>
                <label htmlFor=''>Full name</label>
                <input
                  type='text'
                  placeholder='Anna Hatthaway'
                  className='user-update--input'
                />
              </div>
              <div className='user-update--item'>
                <label htmlFor=''>Email</label>
                <input
                  type='text'
                  placeholder='annahat99@gmail.com'
                  className='user-update--input'
                />
              </div>
              <div className='user-update--item'>
                <label htmlFor=''>Phone</label>
                <input
                  type='text'
                  placeholder='+1 123 456 67'
                  className='user-update--input'
                />
              </div>
              <div className='user-update--item'>
                <label htmlFor=''>Address</label>
                <input
                  type='text'
                  placeholder='Texas | USA '
                  className='user-update--input'
                />
              </div>
            </div>

            <div className='user-update--right'>
              <div className='user-update--upload'>
                <img
                  src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                  alt=''
                  className='user-update--img'
                />
                <label htmlFor='my-file'>
                  <Publish className='user-update--icon' />
                </label>
                <input type='file' id='my-file' style={{ display: 'none' }} />
              </div>
              <button className='user-update--btn'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
