
import { useState } from 'react';
import { registerUser } from '../Redux/Auth/authOperations';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {  ILoginTarget } from '../types/appTypes';
import { useAppDispatch } from '../Redux/hooks';

export default function RegisterPage() {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }:{target:ILoginTarget}) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="md">
        <Box p={10} sx={{ bgcolor: '#cfe8fc' }} textAlign="center">
          <Typography variant="h3" gutterBottom>
            Register Page
          </Typography>
          <Box
            component="form"
            sx={
              {
                '& > :not(style)': { m: 1, width: '25ch' }
                ,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              
              }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            textAlign="center"
          >
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              type="text"
              name="name"
              onChange={handleChange}
              value={name}
              sx={{ mb: 3 }}
              required
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              required
              value={email}
              onChange={handleChange}
              sx={{ mb: 3 }}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              required
              value={password}
              onChange={handleChange}
              sx={{ mb: 3 }}
            />
            <Button type="submit" variant="contained" sx={{ mb: 3 }}>
              Register
            </Button>
            {/* <ToastContainer autoClose={2000} /> */}
          </Box>
        </Box>
      </Container>
    </div>
  );
}
