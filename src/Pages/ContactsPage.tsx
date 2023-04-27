import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';
import Typography from '@mui/material/Typography';

 const ContactsPage:React.FC = ()=> {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Box p={10} sx={{ bgcolor: '#cfe8fc' }} textAlign="center">
          <Typography variant="h3" gutterBottom>
            Phonebook
          </Typography>
          <ContactForm />
          <Typography variant="h4" gutterBottom>
            Contacts
          </Typography>
          <Filter />
          <ContactList />
        </Box>
      </Container>
    </>
  );
}
export default ContactsPage