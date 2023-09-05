import { Formik } from 'formik';
import * as yup from 'yup';
import {
  Modal,
  Button,
  Box,
  Typography,
  useMediaQuery,
  TextField,
  MenuItem,
} from '@mui/material';

const initialValues = {
  className: '',
  teacherName: '',
  day: '',
  startTime: '',
  finishTime: '',
  level: '',
};

const classSchema = yup.object().shape({
  className: yup.string().required('Class Name is Required!'),
  teacherName: yup.string().required('Teacher Name is Required!'),
  day: yup.string().required('Required!'),
  startTime: yup.string().required('Start time is required!'),
  finishTime: yup.string().required('Finish time is required!'),
  level: yup.string().required('Level is required!'),
});

const CreateModal = ({ isOpen, onClose, onSubmit, teachers }) => {
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
          Create Class
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={classSchema}
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
                  label="Class Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="className"
                  value={values.className}
                  error={
                    Boolean(touched.className) && Boolean(errors.className)
                  }
                  helperText={touched.className && errors.className}
                  sx={{ gridColumn: 'span 4' }}
                />
                <TextField
                  fullWidth
                  select
                  type="text"
                  label="Teacher"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="teacherName"
                  value={values.teacherName}
                  error={
                    Boolean(touched.teacherName) && Boolean(errors.teacherName)
                  }
                  helperText={touched.teacherName && errors.teacherName}
                  sx={{ gridColumn: 'span 2' }}
                >
                  {teachers.map((teacher) => (
                    <MenuItem key={teacher._id} value={teacher.preferredName}>
                      {teacher.preferredName}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  fullWidth
                  select
                  type="text"
                  label="Day"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="day"
                  value={values.day}
                  error={Boolean(touched.day) && Boolean(errors.day)}
                  helperText={touched.day && errors.day}
                  sx={{ gridColumn: 'span 2' }}
                >
                  <MenuItem value="Monday">Monday</MenuItem>
                  <MenuItem value="Tuesday">Tuesday</MenuItem>
                  <MenuItem value="Wednesday">Wednesday</MenuItem>
                  <MenuItem value="Thursday">Thursday</MenuItem>
                  <MenuItem value="Friday">Friday</MenuItem>
                  <MenuItem value="Saturday">Saturday</MenuItem>
                  <MenuItem value="Sunday">Sunday</MenuItem>
                </TextField>
                <TextField
                  fullWidth
                  type="time"
                  label="Start Time"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="startTime"
                  value={values.startTime}
                  error={
                    Boolean(touched.startTime) && Boolean(errors.startTime)
                  }
                  helperText={touched.startTime && errors.startTime}
                  sx={{ gridColumn: 'span 2' }}
                />
                <TextField
                  fullWidth
                  type="time"
                  label="finishTime"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="finishTime"
                  value={values.finishTime}
                  error={
                    Boolean(touched.finishTime) && Boolean(errors.finishTime)
                  }
                  helperText={touched.finishTime && errors.finishTime}
                  sx={{ gridColumn: 'span 2' }}
                />
                <TextField
                  fullWidth
                  select
                  type="text"
                  label="Level"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="level"
                  value={values.level}
                  error={Boolean(touched.level) && Boolean(errors.level)}
                  helperText={touched.level && errors.level}
                  sx={{ gridColumn: 'span 2' }}
                >
                  <MenuItem value="Beginner">Beginner</MenuItem>
                  <MenuItem value="Intermediate">Intermediate</MenuItem>
                  <MenuItem value="Advanced">Advanced</MenuItem>
                  <MenuItem value="All">All</MenuItem>
                </TextField>

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
