import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../Redux/selectors';
import { AppNav } from './AppNav';
import { AuthNav } from './AuthNav';
import { UserMenu } from './UserMenu';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

export const AppBarMenu:React.FC = ()=> {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}> */}
          <AppNav />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
          {/* </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
