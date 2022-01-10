import './widgetBig.scss';

const WidgetBig = () => {
  // TODO: Small component: Buttons
  const Button = ({ type }) => {
    return <button className={`widget-big_button ${type}`}>{type}</button>;
  };

  return (
    <div className='widget-big'>
      <h3 className='widget-big_title'>Latest Transactions</h3>
      <table className='widget-big_table'>
        <tr className='widget-big_tableTR'>
          <th className='widget-big_tableTH'>Customer</th>
          <th className='widget-big_tableTH'>Date</th>
          <th className='widget-big_tableTH'>Amount</th>
          <th className='widget-big_tableTH'>Status</th>
        </tr>
        <tr className='widget-big_tableTR'>
          <td className='widget-big_user'>
            <img
              src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt='user'
              className='widget-big_img'
            />
            <span className='widget-big_username'>Sasun Karol</span>
          </td>
          <td className='widget-big_date'>2 Jun 2021</td>
          <td className='widget-big_amount'>$121.21</td>
          <td className='widget-big_status'>
            <Button type='approved' />
          </td>
        </tr>
        <tr className='widget-big_tableTR'>
          <td className='widget-big_user'>
            <img
              src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt='user'
              className='widget-big_img'
            />
            <span className='widget-big_username'>Sasun Karol</span>
          </td>
          <td className='widget-big_date'>2 Jun 2021</td>
          <td className='widget-big_amount'>$121.21</td>
          <td className='widget-big_status'>
            <Button type={'declined'} />
          </td>
        </tr>
        <tr className='widget-big_tableTR'>
          <td className='widget-big_user'>
            <img
              src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt='user'
              className='widget-big_img'
            />
            <span className='widget-big_username'>Sasun Karol</span>
          </td>
          <td className='widget-big_date'>2 Jun 2021</td>
          <td className='widget-big_amount'>$121.21</td>
          <td className='widget-big_status'>
            <Button type={'pending'} />
          </td>
        </tr>
        <tr className='widget-big_tableTR'>
          <td className='widget-big_user'>
            <img
              src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt='user'
              className='widget-big_img'
            />
            <span className='widget-big_username'>Sasun Karol</span>
          </td>
          <td className='widget-big_date'>2 Jun 2021</td>
          <td className='widget-big_amount'>$121.21</td>
          <td className='widget-big_status'>
            <Button type={'approved'} />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetBig;
