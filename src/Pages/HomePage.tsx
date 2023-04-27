import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getIsLoggedIn } from '../Redux/selectors';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';
import Typography from '@mui/material/Typography';

 const HomePage:React.FC = ()=> {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <main>
      <CssBaseline />
      <Container maxWidth="md">
        <Box p={10} sx={{ bgcolor: '#cfe8fc' }} textAlign="center">
          <Typography variant="h3" gutterBottom>
            Home Page
          </Typography>
          {isLoggedIn ? (
            <Typography>Welcome to phonebook App</Typography>
          ) : (
            <Typography>
              `Welcome! You need to {<Link to={'/register'}>register</Link>} in
              App or {<Link to={'/login'}>login</Link>}`
            </Typography>
          )}
        </Box>
      </Container>
    </main>
  );
}
export default HomePage