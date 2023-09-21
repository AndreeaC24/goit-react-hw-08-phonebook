import * as React from 'react'; 
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 

import { pink } from '@mui/material/colors';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell'; 
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';  

import { selectContacts, selectFilteredContacts, selectError, selectIsLoading,} from '../../redux/contacts/selectorsContacts';
import { fetchContacts, deleteContact, editContact, } from '../../redux/contacts/operationsContacts';
import { NotFound } from '../notFound/NotFound';
import { Loader } from '../loader/Loader';
import { useStyles } from '../style/Styles';

export const ContactList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);
  const secondary = pink[500]; // eslint-disable-line no-unused-vars


  const [close, setClose] = useState(false);   // eslint-disable-line no-unused-vars

  const [editName, setEditName] = useState('');
  const [editPhone, setEditPhone] = useState('');
  const [editId, setEditId] = useState(null);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleEdit = (contact) => {
    setEditName(contact.name);
    setEditPhone(contact.number);
    setEditId(contact.id);
  };

  const handleSave = () => {
    if (editId) {
      dispatch(editContact({ id: editId, name: editName, number: editPhone }));
      setEditId(null);
      setClose(); 
    }
  }; 

 const handleRemove = id => {
    dispatch(deleteContact(id)); 
  };

  if (filteredContacts.length === 0 && !isLoading) {
    return <NotFound />;
  }
  
  return (
    <div>
      {isLoading && <Loader />}
      {contacts.length === 0 && !error && !isLoading ? (
      <span>Your agenda is currently empty</span>
      ) : (
        <Table className={classes.tabelContact}>
          <TableBody>
            {filteredContacts.map(contact => (
              <TableRow key={contact.id}>
                <TableCell>
                  <Avatar sx={{ bgcolor: '#275DBA', }}
                  />
                </TableCell>
                <TableCell>
                  {editId === contact.id ? (
                    <TextField
                      label="Name"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      sx={{
                        "& input": {
                          paddingLeft: '10px',  
                        },
                      }}
                    />
                  ) : (
                    <Typography className={classes.nameContact}>
                      {contact.name
                        .split(' ')
                        .map(n => n.charAt(0).toUpperCase() + n.slice(1))
                        .join(' ')}
                    </Typography>
                  )}
                </TableCell>
                <TableCell>
                  {editId === contact.id ? (
                    <TextField
                      label="Phone"
                      value={editPhone}
                      onChange={(e) => setEditPhone(e.target.value)}
                      sx={{
                        "& input": {
                          paddingLeft: '10px', 
                        },
                      }}
                    />
                  ) : (
                    <span className={classes.phoneContact}>
                      <CallOutlinedIcon fontSize="15px" style={{ color: '#ccc' }} />
                      <span className={classes.phoneNumber}>
                        {contact.number}
                      </span>
                    </span>
                  )}
                </TableCell>
                <TableCell>
                {editId === contact.id ? (
                <Button variant="contained" color="primary" onClick={handleSave}>
                  Save
                </Button>
              ) : (
                <>
                  <Button
                    variant="contained"
                    onClick={() => handleEdit(contact)} 
                    className={classes.editButton}
                    color="primary"
                  >
                    <EditNoteOutlinedIcon />
                  </Button> 
                </>
              )}
                  <Button
                    variant="contained"
                    className={classes.deleteButton}
                    color="secondary"                    
                    onClick={() => {
                      handleRemove(contact.id);
                    }}
                  >
                    <DeleteOutlinedIcon  />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};
