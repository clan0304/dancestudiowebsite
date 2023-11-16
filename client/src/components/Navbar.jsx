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
            opacity: 0.3,
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
                opacity: 0.2,
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
                opacity: 0.2,
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
                opacity: 0.2,
              },
            }}
          >
            About Us
          </Typography>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
          sx={{
            '&:hover': {
              cursor: 'pointer',
            },
          }}
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
          maxWidth="600px"
          minWidth="200px"
          backgroundColor={emerald}
        >
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
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
              onClick={() => {
                navigate('/danceclass');
                setIsMobileMenuToggled(!isMobileMenuToggled);
              }}
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                  opacity: 0.2,
                },
              }}
            >
              Dance Class
            </Typography>
            <Typography
              variant="h3"
              color="black"
              onClick={() => {
                navigate('/price');
                setIsMobileMenuToggled(!isMobileMenuToggled);
              }}
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                  opacity: 0.2,
                },
              }}
            >
              Price
            </Typography>
            <Typography
              variant="h3"
              color="black"
              onClick={() => {
                navigate('/aboutus');
                setIsMobileMenuToggled(!isMobileMenuToggled);
              }}
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                  opacity: 0.2,
                },
              }}
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
