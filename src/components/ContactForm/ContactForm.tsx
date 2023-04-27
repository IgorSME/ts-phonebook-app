import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { nanoid } from 'nanoid';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../Redux/contactsSlice';

export const ContactForm:React.FC =()=> {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };
  const addNewContact = () => {
    
    if (
      contacts?.find(elem => elem.name.toLowerCase() === name.toLowerCase())
    ) {
      toast.warn(`${name} is alredy in contacts`);

      return;
    }
    const newContact = { id: nanoid(), name, number };
    addContact(newContact);
    toast.success(`${name} add to contacts`);
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewContact();
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
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
        inputProps={{pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"}}
        required
      />
      <TextField
        id="number"
        label="Number"
        variant="outlined"
        type="tel"
        name="number"
       inputProps={{ pattern: "\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}" }}   
        required
        value={number}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained">
        Add contact
      </Button>
      <ToastContainer autoClose={2000} />
    </Box>
  );
}
