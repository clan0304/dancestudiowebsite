import { useState, useEffect } from 'react';
import { Box, Tabs, Tab, Typography, useTheme } from '@mui/material';
import axios from 'axios';
import DanceClass from './DanceClass';
import Footer from '../../components/Footer';

const DanceClassPage = () => {
  const [danceClasses, setDanceClasses] = useState([]);
  const [value, setValue] = useState('Monday');
  const theme = useTheme();
  const darkEmerald = theme.palette.emerald.dark;

  danceClasses.sort((a, b) => {
    const timeA = new Date(`2000-01-01T${a.startTime}`);
    const timeB = new Date(`2000-01-01T${b.startTime}`);

    if (timeA < timeB) {
      return -1;
    } else if (timeA < timeB) {
      return 1;
    } else {
      return 0;
    }
  });

  useEffect(() => {
    const getDanceClasses = async (req, res) => {
      const response = await axios.get(
        'https://danceacademymern.onrender.com/danceclass'
      );
      setDanceClasses(response.data);
    };
    getDanceClasses();
  }, []);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const monday = danceClasses.filter(
    (danceclass) => danceclass.day === 'Monday'
  );
  const tuesday = danceClasses.filter(
    (danceclass) => danceclass.day === 'Tuesday'
  );
  const wednesday = danceClasses.filter(
    (danceclass) => danceclass.day === 'Wednesday'
  );
  const thursday = danceClasses.filter(
    (danceclass) => danceclass.day === 'Thursday'
  );
  const friday = danceClasses.filter(
    (danceclass) => danceclass.day === 'Friday'
  );
  const saturday = danceClasses.filter(
    (danceclass) => danceclass.day === 'Saturday'
  );
  const sunday = danceClasses.filter(
    (danceclass) => danceclass.day === 'Sunday'
  );

  return (
    <Box
      display="flex"
      position="relative"
      flexDirection="column"
      justifyContent="center"
      minHeight="100vh"
    >
      <Box sx={{ flex: 1 }}>
        <Box mt="1rem" display="flex" justifyContent="center">
          <Typography fontSize="50px" color={darkEmerald}>
            Time Table
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          m="2rem 2rem 2rem 0"
          width="100%"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
          >
            <Tab label="Mon" value="Monday" />
            <Tab label="Tue" value="Tuesday" />
            <Tab label="Wed" value="Wednesday" />
            <Tab label="Thu" value="Thursday" />
            <Tab label="Fri" value="Friday" />
            <Tab label="Sat" value="Saturday" />
            <Tab label="Sun" value="Sunday" />
          </Tabs>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap="0.5rem"
          minHeight="500px"
        >
          {value === 'Monday' &&
            monday.map((danceClass) => (
              <DanceClass danceClass={danceClass} key={danceClass._id} />
            ))}
          {value === 'Tuesday' &&
            tuesday.map((danceClass) => (
              <DanceClass danceClass={danceClass} key={danceClass._id} />
            ))}
          {value === 'Wednesday' &&
            wednesday.map((danceClass) => (
              <DanceClass danceClass={danceClass} key={danceClass._id} />
            ))}
          {value === 'Thursday' &&
            thursday.map((danceClass) => (
              <DanceClass danceClass={danceClass} key={danceClass._id} />
            ))}
          {value === 'Friday' &&
            friday.map((danceClass) => (
              <DanceClass danceClass={danceClass} key={danceClass._id} />
            ))}
          {value === 'Saturday' &&
            saturday.map((danceClass) => (
              <DanceClass danceClass={danceClass} key={danceClass._id} />
            ))}
          {value === 'Sunday' &&
            sunday.map((danceClass) => (
              <DanceClass danceClass={danceClass} key={danceClass._id} />
            ))}
        </Box>
        <Footer style={{ position: 'sticky', bottom: 0 }} />
      </Box>
    </Box>
  );
};

export default DanceClassPage;
