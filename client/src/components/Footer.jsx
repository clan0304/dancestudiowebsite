import { Box, Typography, useTheme } from '@mui/material';

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      width="100%"
      sx={{
        backgroundColor: theme.palette.emerald.dark,
        position: 'sticky',

        bottom: 0,
      }}
    >
      <Box
        height="auto"
        marginLeft="4rem"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        columnGap="clamp(20px,30px,40px)"
      >
        <Box color="white">
          <Typography variant="h1" fontWeight="bold" mb="10px">
            Just Dance
          </Typography>
          <Typography mb="10px">800 Dance Street</Typography>
          <Typography mb="10px">Carlton VIC 3053</Typography>
          <Typography mb="10px">T:03 1234 5678</Typography>
          <Typography mb="10px">F: justdance@justdance.com.au</Typography>
        </Box>

        <Box marginRight="2rem">
          <Typography color="white" fontSize="20px">
            Just Dance © 2023
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
