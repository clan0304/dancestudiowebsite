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
  const [teachers, setTeachers] = useState([]);

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
    axios.delete(`https://danceacademymern.onrender.com/danceclass/${id}`);
    window.location.reload();
  };

  const handleClose = () => {
    closeUpdateModal();
    setSelectedRow(null);
  };

  const columns = [
    { field: 'className', headerName: 'Class Name', width: 200 },
    { field: 'teacherName', headerName: 'Teacher Name', width: 200 },
    { field: 'day', headerName: 'Day', width: 300 },
    { field: 'startTime', headerName: 'Start Time', width: 300 },
    { field: 'finishTime', headerName: 'Finish Time', width: 200 },
    { field: 'level', headerName: 'Level', width: 200 },
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
    await axios.post(
      'https://danceacademymern.onrender.com/danceclass',
      values
    );
    window.location.reload();
    alert('Class is created!');
    closeCreateModal();
  };

  const handleUpdateSubmit = async (values) => {
    await axios.put(
      `https://danceacademymern.onrender.com/danceclass/${selectedRow._id}`,
      values
    );
    window.location.reload();
    alert('Updated!');
    handleClose();
  };
  const getDanceClass = async () => {
    const response = await axios.get(
      'https://danceacademymern.onrender.com/danceclass'
    );
    setRows(response.data);
  };

  const getTeacher = async () => {
    const response = await axios.get(
      'https://danceacademymern.onrender.com/teacher'
    );
    setTeachers(response.data);
  };

  useEffect(() => {
    getTeacher();
    getDanceClass();
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
        Add Dance Class
      </Button>
      <CreateModal
        isOpen={isCreateModalOpen}
        onClose={closeCreateModal}
        onSubmit={handleCreateSubmit}
        teachers={teachers}
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
        teachers={teachers}
      />
    </Box>
  );
};

export default Home;
