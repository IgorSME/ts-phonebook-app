import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from '../../Redux/contactsSlice';
import { changeFilterValue } from '../../Redux/filterSlice';
import { IContactsItem } from '../../types/appTypes';
import { GridColDef } from '@mui/x-data-grid';


export function ContactList() {
  const { data: contacts } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const value = useSelector(changeFilterValue);

  const columns: GridColDef<IContactsItem>[] = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'name', headerName: 'Name', width: 170 },
    {
      field: 'number',
      headerName: 'Phone',
      type: 'number',
      width: 170,
    },
    {
      field: 'Action',
      renderCell: (contact:IContactsItem) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              deleteContact(contact.id);
              toast.error(`${contact.name} is delete`);
            }}
          >
            Delete
          </Button>
        );
      },
    },
  ];

  const getFilteredContacts = () => {
    const normalizedFilter = value.toLowerCase();

    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();

  return (
    <div
      style={{
        height: 400,
        width: '100%',
        marginTop: '5px',
      }}
    >
      {filteredContacts ? (
        <DataGrid
          sx={{ borderBottom: 1 }}
          rows={filteredContacts}
          columns={columns}
          pageSizeOptions={[5]}
          rowsPerPageOptions={[5]}
          checkboxSelection
      
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
