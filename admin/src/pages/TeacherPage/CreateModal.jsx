import { Formik } from 'formik';
import * as yup from 'yup';
import {
  Modal,
  Button,
  Box,
  Typography,
  useMediaQuery,
  TextField,
} from '@mui/material';

const initialValues = {
  firstName: '',
  lastName: '',
  preferredName: '',
  email: '',
  phoneNumber: '',
};

const teacherSchema = yup.object().shape({
  firstName: yup.string().required('First Name is Required!'),
  lastName: yup.string().required('Last Name is Required!'),
  preferredName: yup.string().required('Preferred Name is Required!'),
  email: yup
    .string()
    .email('Valid Email Please!')
    .required('Email is Required!'),
  phoneNumber: yup.string().required('PhoneNumber is Required!'),
});

const CreateModal = ({ isOpen, onClose, onSubmit }) => {
  const isNonMobile = useMediaQuery('(min-width:800px)');
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        zIndex={10}
        position="fixed"
        backgroundColor="white"
        width="80%"
        height="80%"
        left="0"
        top="0"
        overflow="auto"
        padding="2rem"
      >
        <Typography
          sx={{
            mb: 2,
            fontSize: 30,
            fontWeight: 'bold',
          }}
        >
          Add Teacher
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={teacherSchema}
          onSubmit={onSubmit}
        >
          {({
            values,
            touched,
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="15px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
                }}
              >
                <TextField
                  fullWidth
                  type="text"
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="firstName"
                  value={values.firstName}
                  error={
                    Boolean(touched.firstName) && Boolean(errors.firstName)
                  }
                  helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: 'span 2' }}
                />
                <TextField
                  fullWidth
                  type="text"
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="lastName"
                  value={values.lastName}
                  error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  sx={{ gridColumn: 'span 2' }}
                />
                <TextField
                  fullWidth
                  type="text"
                  label="Preferred Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="preferredName"
                  value={values.preferredName}
                  error={
                    Boolean(touched.preferredName) &&
                    Boolean(errors.preferredName)
                  }
                  helperText={touched.preferredName && errors.preferredName}
                  sx={{ gridColumn: 'span 2' }}
                />
                <TextField
                  fullWidth
                  type="text"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="email"
                  value={values.email}
                  error={Boolean(touched.email) && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  sx={{ gridColumn: 'span 2' }}
                />
                <TextField
                  fullWidth
                  type="text"
                  label="Phone Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="phoneNumber"
                  value={values.phoneNumber}
                  error={
                    Boolean(touched.phoneNumber) && Boolean(errors.phoneNumber)
                  }
                  helperText={touched.phoneNumber && errors.phoneNumber}
                  sx={{ gridColumn: 'span 4' }}
                />

                <Button type="submit" variant="contained">
                  Create
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default CreateModal;
