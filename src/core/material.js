import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

export const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500] },
    secondary: { main: pink[500] },
    type: 'light',
  },
});
