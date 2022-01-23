import './productList.scss';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';

import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (userID) => {
    setData(data.filter((item) => item.id !== userID));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='productList-product'>
            <img
              src={params.row.img}
              alt='mini avatar'
              className='productList-img'
            />
            {params.row.name}
          </div>
        );
      },
    },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'price',
      headerName: 'Price Volume',
      width: 180,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <div className='productList-action'>
            <Link to={'/product/' + params.row.id}>
              <button className='productList-edit'>Edit</button>
            </Link>
            <DeleteOutline
              className='productList-delete'
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className='productList'>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;
