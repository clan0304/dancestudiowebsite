import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import FlexBetween from '../../components/FlexBetween';

import { useState, useEffect } from 'react';
import axios from 'axios';

import PayButton from '../../components/PayButton';
import Footer from '../../components/Footer';

const PricePage = () => {
  const theme = useTheme();
  const darkEmerald = theme.palette.emerald.dark;
  const [prices, setPrices] = useState([]);
  const isNonMobileScreens = useMediaQuery('(min-width: 600px)');

  useEffect(() => {
    const getPrice = async (req, res) => {
      const response = await axios.get(
        'https://danceacademymern.onrender.com/price'
      );
      setPrices(response.data);
    };
    getPrice();
  }, []);

  return (
    <Box>
      <FlexBetween
        backgroundColor={darkEmerald}
        width="100%"
        height="100px"
        mt="2rem"
        textAlign="center"
      >
        <Box width="100%">
          <Typography color="white" fontSize="2.5rem">
            CLASS PRICE
          </Typography>
        </Box>
      </FlexBetween>

      {isNonMobileScreens ? (
        <FlexBetween
          width="100%"
          p="5rem 5%"
          flexWrap="wrap"
          columnGap="5%"
          rowGap="3rem"
        >
          {prices.map((price) => (
            <FlexBetween
              flexDirection="column"
              key={price._id}
              border="1px solid"
              width="40%"
              borderRadius="15px"
              backgroundColor="#D9B295"
              height="350px"
            >
              <Box m="2rem">
                <Typography variant="h2">{price.passType}</Typography>
              </Box>
              <Typography variant="h0">${price.price}</Typography>
              <Typography typography="h1">{price.shortDesc}</Typography>
              <Box
                sx={{ display: 'flex', justifyContent: 'flex-end', m: '1rem' }}
              >
                <PayButton price={price} />
              </Box>
            </FlexBetween>
          ))}
        </FlexBetween>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          width="100%"
          p="5rem 5%"
          flexWrap="wrap"
          rowGap="3rem"
        >
          {prices.map((price) => (
            <FlexBetween
              flexDirection="column"
              key={price._id}
              border="1px solid"
              width="80%"
              height="350px"
              borderRadius="15px"
              backgroundColor="#D9B295"
            >
              <Box m="2rem">
                <Typography variant="h3">{price.passType}</Typography>
              </Box>
              <Typography typography="h0">$ {price.price}</Typography>
              <Typography typography="h1">{price.shortDesc}</Typography>
              <Box
                sx={{ display: 'flex', justifyContent: 'flex-end', m: '1rem' }}
              >
                <PayButton price={price} />
              </Box>
            </FlexBetween>
          ))}
        </Box>
      )}
      <Footer />
    </Box>
  );
};

export default PricePage;
