import { Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CreateModal from './CreateModal';
import { DataGrid } from '@mui/x-data-grid';
import UpdateModal from './UpdateModal';

const TeacherPage = () => {
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
    axios.delete(`https://danceacademymern.onrender.com/teacher/${id}`);
    window.location.reload();
  };

  const handleClose = () => {
    closeUpdateModal();
    setSelectedRow(null);
  };

  const columns = [
    { field: 'firstName', headerName: 'First Name', width: 200 },
    { field: 'lastName', headerName: 'Last Name', width: 200 },
    { field: 'preferredName', headerName: 'Preferred Name', width: 300 },
    { field: 'email', headerName: 'Email', width: 300 },
    { field: 'phoneNumber', headerName: 'Phone', width: 200 },
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
    await axios.post('https://danceacademymern.onrender.com/teacher', values);
    window.location.reload();
    alert('Teacher is added!');
    closeCreateModal();
  };

  const handleUpdateSubmit = async (values) => {
    await axios.put(
      `https://danceacademymern.onrender.com/teacher/${selectedRow._id}`,
      values
    );
    window.location.reload();
    alert('Updated!');
    handleClose();
  };

  useEffect(() => {
    const getTeacher = async () => {
      const response = await axios.get(
        'https://danceacademymern.onrender.com/teacher'
      );
      setRows(response.data);
    };
    getTeacher();
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
        Add Teacher
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

export default TeacherPage;
