import { Box, Button, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CheckoutSuccess = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const emerald = theme.palette.emerald.main;
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box mt="5rem" textAlign="center">
        <Typography
          fontSize="15px"
          sx={{
            mb: 2,
          }}
        >
          Your order has been confirmed, and you will receive an email with QR
          code, order details.
        </Typography>
        <Typography fontSize="30px" fontWeight="bold">
          Thank you for choosing us!
        </Typography>
        <Button
          onClick={() => navigate('/')}
          variant="contained"
          sx={{
            backgroundColor: emerald,
            mt: 2,
          }}
        >
          Back to Home
        </Button>
      </Box>
    </Box>
  );
};

export default CheckoutSuccess;
