import { Modal, Box, Button, TextField, useMediaQuery } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';

const priceSchema = yup.object().shape({
  passType: yup.string().required('Required!'),
  price: yup.number().required('Required!'),
  shortDesc: yup.string().required('Required!'),
});

const UpdateModal = ({ open, onClose, initialValues, onSubmit }) => {
  const isNonMobile = useMediaQuery('(min-width:800px)');
  return (
    <Modal open={open} onClose={onClose}>
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
        <Formik
          initialValues={initialValues}
          validationSchema={priceSchema}
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
                  label="Pass Type"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="passType"
                  value={values.passType}
                  error={Boolean(touched.passType) && Boolean(errors.passType)}
                  helperText={touched.passType && errors.passType}
                  sx={{ gridColumn: 'span 2' }}
                />
                <TextField
                  fullWidth
                  type="text"
                  label="Price"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="price"
                  value={values.price}
                  error={Boolean(touched.price) && Boolean(errors.price)}
                  helperText={touched.price && errors.price}
                  sx={{ gridColumn: 'span 2' }}
                />
                <TextField
                  fullWidth
                  type="text"
                  label="Description"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="shortDesc"
                  value={values.shortDesc}
                  error={
                    Boolean(touched.shortDesc) && Boolean(errors.shortDesc)
                  }
                  helperText={touched.shortDesc && errors.shortDesc}
                  sx={{ gridColumn: 'span 4' }}
                />

                <Button type="submit" variant="contained">
                  Update
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default UpdateModal;
