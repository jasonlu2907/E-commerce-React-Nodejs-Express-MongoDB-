import './userList.scss';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRow } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const UserList = () => {
  const [data, setData] = useState(userRow);
  const handleDelete = (userID) => {
    setData(data.filter((item) => item.id !== userID));
  };
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'username',
      headerName: 'Username',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='userList-user'>
            <img
              src={params.row.avatar}
              alt='mini avatar'
              className='userList-img'
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 180,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link path={'/user/' + params.row.id}>
              <button className='userList-edit'>Edit</button>
            </Link>
            <DeleteOutline
              className='userList-delete'
              onClink={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='userList'>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
