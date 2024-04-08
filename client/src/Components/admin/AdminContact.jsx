import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import axios from 'axios';

const AdminContact = () => {
  const columns = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'number', headerName: 'Number', flex: 1 },
    {
      field: 'message',
      headerName: 'Message',
      flex: 2, // Adjust the flex property or use fixed width to accommodate the message
      renderCell: ({ value }) => (
        <div style={{ whiteSpace: 'pre-wrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {value}
        </div>
      ),
    },
   
  ];

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/contacts');
        setContacts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
   
      <DataGrid
        rows={contacts}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
        pageSize={5}
        getRowId={(row) => row._id}
        autoHeight
        headerHeight={56}
        rowHeight={56}
      />
    
  );
};

export default AdminContact;