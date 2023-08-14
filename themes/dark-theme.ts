import { createTheme } from '@mui/material';
import { blue, red } from '@mui/material/colors';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: blue[900],
        },
      },
      defaultProps: {
        elevation: 0
      }
    }
  }
})