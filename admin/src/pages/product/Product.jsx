import './product.scss';
import Chart from '../../components/chart/Chart';
import { Link } from 'react-router-dom';
import { productData } from '../../dummyData';
import { Publish } from '@material-ui/icons';

const Product = () => {
  return (
    <div className='product'>
      <div className='product-titleContainer'>
        <h1 className='product-titleContainer--title'>Product</h1>
        <Link to='/newProduct'>
          <button className='product-titleContainer--addBtn'>Create</button>
        </Link>
      </div>

      {/* Product Top */}
      <div className='product-top'>
        <div className='product-top--left'>
          <Chart data={productData} dataKey='Sales' title='Sales Performance' />
        </div>
        <div className='product-top--right'>
          <div className='product-InfoTop'>
            <img
              src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
              className='product-InfoImg'
            />
            <span className='product-name'>Apple Airpods</span>
          </div>
          <div className='product-InfoBottom'>
            <div className='product-InfoItem'>
              <span className='product-InfoKey'>id:</span>
              <span className='product-InfoValue'>123</span>
            </div>
            <div className='product-InfoItem'>
              <span className='product-InfoKey'>sales:</span>
              <span className='product-InfoValue'>5123</span>
            </div>
            <div className='product-InfoItem'>
              <span className='product-InfoKey'>active:</span>
              <span className='product-InfoValue'>yes</span>
            </div>
            <div className='product-InfoItem'>
              <span className='product-InfoKey'>in stock:</span>
              <span className='product-InfoValue'>no</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Bottom */}
      <div className='product-Bottom'>
        <form className='product-Form'>
          <div className='product-FormLeft'>
            <label>Product Name</label>
            <input type='text' placeholder='Apple AirPod' />
            <label>In Stock</label>
            <select name='inStock' id='idStock'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
            <label>Active</label>
            <select name='active' id='active'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
          
          <div className='product-FormRight'>
            <div className='product-Upload'>
              <img
                src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                alt=''
                className='product-UploadImg'
              />
              <label for='file'>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </div>
            <button className='product-Button'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
