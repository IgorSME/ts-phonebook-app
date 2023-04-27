import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { StyledLink } from './AppBar.styled';

export function AuthNav() {
  return (
    <>
      <MenuItem key={'registration'}>
        <Typography textAlign="center">
          <StyledLink to={'/register'}>Registration</StyledLink>
        </Typography>
      </MenuItem>
      <MenuItem key={'login'}>
        <Typography textAlign="center">
          <StyledLink to={'/login'}>Login</StyledLink>
        </Typography>
      </MenuItem>
    </>
  );
}
