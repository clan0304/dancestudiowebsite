import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import FlexBetween from '../../components/FlexBetween';
import Dance1 from '../../photos/dance1.jpg';
import { motion } from 'framer-motion';
import Footer from '../../components/Footer';

const AboutUsPage = () => {
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
  const theme = useTheme();
  const emeraldDark = theme.palette.emerald.dark;
  const fadeInAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        mt: '2rem',
        rowGap: '4rem',
      }}
    >
      <FlexBetween
        width="80%"
        flex={1}
        sx={
          isNonMobileScreens
            ? {
                gap: '3rem',
              }
            : {
                flexDirection: 'column',
                gap: '2rem',
              }
        }
      >
        <Box width="100%">
          <img src={Dance1} alt="dance1" width="100%" objectfit="contain" />
        </Box>
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          flexWrap="wrap"
          textAlign="center"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                color: emeraldDark,
              }}
              variant="h1"
              mb="2rem"
            >
              Welcome to Just Dance - Your Premier Dance Academy
            </Typography>
          </motion.div>
          <Typography variant="h3">
            We believe in the transformative power of dance. With a passion for
            creativity, expression, and movement, we're dedicated to nurturing
            the talents of dancers of all ages and levels. Our academy is more
            than just a place to learn dance steps; it's a community that
            celebrates individuality and embraces the joy of movement.
          </Typography>
        </Box>
      </FlexBetween>

      <Footer style={{ position: 'sticky', bottom: 0 }} />
    </Box>
  );
};

export default AboutUsPage;
