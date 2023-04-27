import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../Redux/selectors';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { StyledLink } from './AppBar.styled';

export const AppNav:React.FC = ()=> {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <MenuItem key={'home'}>
        <Typography textAlign="center">
          <StyledLink to={'/'}>Home</StyledLink>
        </Typography>
      </MenuItem>

      {isLoggedIn && (
        <MenuItem key={'contacts'}>
          <Typography textAlign="center">
            <StyledLink to={'/contacts'}>Contacts</StyledLink>
          </Typography>
        </MenuItem>
      )}
    </>
  );
}
