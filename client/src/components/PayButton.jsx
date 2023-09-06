import { Button, useTheme } from '@mui/material';
import axios from 'axios';

const PayButton = ({ price }) => {
  const theme = useTheme();
  const emerald = theme.palette.emerald.main;
  const handleCheckout = () => {
    axios
      .post(`https://danceacademymern.onrender.com/create-checkout-session`, {
        price,
      })
      .then((res) => {
        if (res.data.url) {
          if (res.data.url) {
            window.location.href = res.data.url;
          }
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <Button
      sx={{
        backgroundColor: emerald,
      }}
      variant="contained"
      onClick={() => handleCheckout()}
    >
      Check Out
    </Button>
  );
};

export default PayButton;
