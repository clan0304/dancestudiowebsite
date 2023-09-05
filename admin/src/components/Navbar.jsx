import { useNavigate } from 'react-router-dom';
import FlexBetween from './FlexBetween';
import { Box, useMediaQuery, Typography, IconButton } from '@mui/material';
import { Menu, Close } from '@mui/icons-material';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery('(min-width: 800px)');

  return (
    <FlexBetween padding="1rem 5%">
      <Typography
        fontSize="clamp(1rem, 2rem, 2.5rem)"
        fontWeight="bold"
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
        <FlexBetween gap="3rem">
          <Typography
            fontSize="clamp(0.75rem, 1.5rem, 2rem)"
            onClick={() => navigate('/teacher')}
            sx={{
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            Teacher
          </Typography>
          <Typography
            fontSize="clamp(0.75rem, 1.5rem, 2rem)"
            onClick={() => navigate('/price')}
            sx={{
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            Price
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
          backgroundColor="#d3d3d3"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
        >
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>
          <FlexBetween flexDirection="column" gap="1rem">
            <Typography fontSize="1rem" onClick={() => navigate('/teacher')}>
              Teacher
            </Typography>
            <Typography fontSize="1rem" onClick={() => navigate('/price')}>
              Price
            </Typography>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;
