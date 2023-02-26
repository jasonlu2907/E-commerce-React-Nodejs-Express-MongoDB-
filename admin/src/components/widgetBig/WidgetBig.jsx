import './widgetBig.scss';
import { useState, useEffect } from 'react';
import { userRequest } from '../../requestMethods';
import { format } from 'timeago.js';
const WidgetBig = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get('orders');
        // console.log(res.data);
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);
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
        {orders.map((order) => (
          <tr className='widget-big_tableTR' key={order._id}>
            <td className='widget-big_user'>
              <img
                src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                alt='user'
                className='widget-big_img'
              />
              <span className='widget-big_username'>{order.userId}</span>
            </td>
            <td className='widget-big_date'>{format(order.createdAt)}</td>
            <td className='widget-big_amount'>${order.amount}</td>
            <td className='widget-big_status'>
              <Button type={order.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default WidgetBig;
