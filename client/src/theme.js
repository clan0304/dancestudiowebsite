import { createTheme } from '@mui/material/styles';

export const colorTokens = {
  emerald: {
    50: '#f2fbf9',
    100: '#d3f4ed',
    200: '#a6e9db',
    300: '#5dd0bd',
    400: '#45bcac',
    500: '#2ba193',
    600: '#208177',
    700: '#1e6761',
    800: '#1c534f',
    900: '#1b4643',
    950: '#0a2928',
  },
  grey: {
    50: '#f6f6f6',
    100: '#e7e7e7',
    200: '#d1d1d1',
    300: '#b0b0b0',
    400: '#888888',
    500: '#757575',
    600: '#5d5d5d',
    700: '#4f4f4f',
    800: '#454545',
    900: '#3d3d3d',
    950: '#262626',
  },
};

export const theme = createTheme({
  palette: {
    emerald: {
      main: colorTokens.emerald[400],
      light: colorTokens.emerald[200],
      dark: colorTokens.emerald[700],
    },
    grey: {
      main: colorTokens.grey[400],
      light: colorTokens.grey[200],
      dark: colorTokens.grey[700],
    },
  },
  typography: {
    fontFamily: ['Rubik', 'sans-serif'].join(','),
    fontSize: '10px',
    h0: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: '70px',
    },
    h1: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: '28px',
    },
    h2: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: '20px',
      '@media (max-width:600px)': {
        fontSize: '10px',
      },
    },
    h3: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: '17px',
    },
    h4: {
      fontFamily: ['Rubik', 'sans-serif'].join(','),
      fontSize: '10px',
    },
  },
});
