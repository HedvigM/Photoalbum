'use client';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#cdd661', // Light green
      contrastText: 'black'
    },
    secondary: {
      main: '#61C6C6', // Light blue
      contrastText: 'black',
    },
  },

  typography: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontSize: 16,
    h1: {
      fontSize: '2rem',
      fontWeight: 500,
      letterSpacing: '0.1rem',
      marginBottom: '2rem'
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 700,
      paddingTop: '2rem'
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 700
    },
    h4: {
      fontSize: '1.15rem',
      fontWeight: 700
    },
    h5: {
      fontSize: '1.07rem',
      fontWeight: 700
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 700
    },
    body1: {
      fontSize: '1rem'
    },
    body2: {
      fontSize: '1rem'
    },
    button: {
      textTransform: 'none'
    }
  }
});