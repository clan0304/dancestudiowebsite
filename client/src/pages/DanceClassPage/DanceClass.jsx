import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import FlexBetween from '../../components/FlexBetween';

const DanceClass = ({ danceClass }) => {
  const { palette } = useTheme();
  const emerald = palette.emerald.main;
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="center"
      alignItems="center"
      padding="1rem"
    >
      <FlexBetween
        width={isNonMobileScreens ? '60%' : '80%'}
        border={`2px solid ${emerald}`}
        borderRadius="10px"
        padding="1rem"
        textAlign="center"
        flexWrap="wrap"
      >
        <Box width="25%">
          <Typography variant="h2" fontWeight="bold">
            {danceClass.startTime} - {danceClass.finishTime}
          </Typography>
        </Box>
        <Box width="25%">
          <Typography mb="0.2rem" variant="h3" fontWeight="bold">
            {danceClass.className}
          </Typography>
          <Typography variant="h4">{danceClass.teacherName}</Typography>
        </Box>
        <Box width="30%">
          <Typography
            variant="h2"
            fontWeight="bold"
            color={
              danceClass.level === 'Beginner'
                ? 'green'
                : danceClass.level === 'Intermediate'
                ? 'blue'
                : danceClass.level === 'Advanced'
                ? 'purple'
                : 'black'
            }
          >
            {danceClass.level}
          </Typography>
        </Box>
      </FlexBetween>
    </Box>
  );
};

export default DanceClass;
