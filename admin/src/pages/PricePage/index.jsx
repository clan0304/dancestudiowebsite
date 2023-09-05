import { Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CreateModal from './CreateModal';
import { DataGrid } from '@mui/x-data-grid';
import UpdateModal from './UpdateModal';

const Home = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  const openCreateModal = () => setIsCreateModalOpen(true);
  const closeCreateModal = () => setIsCreateModalOpen(false);

  const openUpdateModal = () => setIsUpdateModalOpen(true);
  const closeUpdateModal = () => setIsUpdateModalOpen(false);

  const handleEdit = (id) => {
    const row = rows.find((row) => row._id === id);
    setSelectedRow(row);
    openUpdateModal();
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/danceClass/${id}`);
    window.location.reload();
  };

  const handleClose = () => {
    closeUpdateModal();
    setSelectedRow(null);
  };

  const columns = [
    { field: 'passType', headerName: 'Pass Type', width: 200 },
    { field: 'price', headerName: 'Price', width: 200 },
    { field: 'shortDesc', headerName: 'Description', width: 300 },

    {
      field: 'edit',
      headerName: 'Edit',
      width: 100,
      renderCell: (params) => (
        <Button onClick={() => handleEdit(params.row._id)}>Edit</Button>
      ),
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 100,
      renderCell: (params) => (
        <Button onClick={() => handleDelete(params.row._id)}>Delete</Button>
      ),
    },
  ];

  const handleCreateSubmit = async (values) => {
    await axios.post('http://localhost:8000/price', values);
    window.location.reload();
    closeCreateModal();
  };

  const handleUpdateSubmit = async (values) => {
    await axios.put(`http://localhost:8000/price/${selectedRow._id}`, values);
    window.location.reload();
    handleClose();
  };
  const getPrice = async () => {
    const response = await axios.get('http://localhost:8000/price');
    setRows(response.data);
  };

  useEffect(() => {
    getPrice();
  }, []);

  return (
    <Box>
      <Button
        display="flex"
        justifycontent="flex-end"
        onClick={openCreateModal}
        variant="contained"
        sx={{
          m: 1,
        }}
      >
        Add Pass Type
      </Button>
      <CreateModal
        isOpen={isCreateModalOpen}
        onClose={closeCreateModal}
        onSubmit={handleCreateSubmit}
      />
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={2}
        sx={{ textAlign: 'center', zIndex: 1 }}
      />
      <UpdateModal
        open={isUpdateModalOpen}
        onClose={closeUpdateModal}
        initialValues={selectedRow}
        onSubmit={handleUpdateSubmit}
      />
    </Box>
  );
};

export default Home;
