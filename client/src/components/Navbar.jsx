import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import { Menu, Close } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import FlexBetween from './FlexBetween';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery('(min-width: 800px)');
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);

  const emerald = theme.palette.emerald.main;
  const lightGrey = theme.palette.grey.light;

  return (
    <FlexBetween backgroundColor={emerald} padding="1rem 5%">
      <Typography
        fontSize="clamp(1rem, 2rem, 2.5rem)"
        fontWeight="bold"
        color="white"
        onClick={() => navigate('/')}
        sx={{
          '&:hover': {
            cursor: 'pointer',
          },
        }}
      >
        Just Dance
      </Typography>
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <Typography
            fontSize="clamp(0.75rem, 1.5rem, 2rem)"
            color="black"
            onClick={() => navigate('/danceclass')}
            sx={{
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            Dance Class
          </Typography>
          <Typography
            fontSize="clamp(0.75rem, 1.5rem, 2rem)"
            color="black"
            onClick={() => navigate('/price')}
            sx={{
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            Price
          </Typography>
          <Typography
            fontSize="clamp(0.75rem, 1.5rem, 2rem)"
            color="black"
            onClick={() => navigate('/aboutus')}
            sx={{
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            About Us
          </Typography>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="400px"
          minWidth="200px"
          backgroundColor={lightGrey}
        >
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="2rem"
          >
            <Typography
              variant="h3"
              color="black"
              onClick={() => navigate('/danceclass')}
            >
              Dance Class
            </Typography>
            <Typography
              variant="h3"
              color="black"
              onClick={() => navigate('/price')}
            >
              Price
            </Typography>
            <Typography
              variant="h3"
              color="black"
              onClick={() => navigate('/aboutus')}
            >
              About Us
            </Typography>
          </Box>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;
