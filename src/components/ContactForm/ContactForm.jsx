import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TextField, Button, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import { useStyles } from 'components/style/Styles';
import { selectContacts } from '../../redux/contacts/selectorsContacts';
import { addContact } from '../../redux/contacts/operationsContacts'; 

export const ContactForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const nameRef = useRef();
  const phoneRef = useRef();

  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [showErrors, setShowErrors] = useState(false); // eslint-disable-line no-unused-vars


  const validateName = name => {
    if ( /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(name) && name.length > 2) {
      setNameError('');
    } else {
      setNameError('Name should have at least 3 letters');
    }
  };
  const validatePhoneNumber = number => {
    if (/^07\d{8}$/.test(number)) {
      setPhoneError('');
    } else {
      setPhoneError('Phone number should start with "07" and have 10 digits');
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const contactName = nameRef.current.value;
    const contactNumber = phoneRef.current.value;
    const isDuplicate = contacts.find(
      contact => contact.name.toLowerCase() === contactName.toLowerCase()
    ); 

    if (isDuplicate) {
      toast.warn(`${contactName} is already in contacts.`);
    } else {
      if (contactName && contactNumber && !nameError && !phoneError) {
        const contact = {
          name: contactName,
          number: contactNumber,
        }; 
        dispatch(addContact(contact));
        form.reset();
      } else {
        setShowErrors(true);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div className={classes.formGroup}>
            <Box className={classes.addBox}>
              <AccountCircle sx={{ color: 'primary', mr: 1, my: 0.5 }} />
              <TextField
                placeholder="Name"
                variant="standard"
                inputRef={nameRef}
                name="name"
                type="text"
                required
                onBlur={e => validateName(e.target.value)}
              />
              {nameError && ( <span className={classes.addSpanBox}> {nameError} </span> )}
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.formGroup}>
            <Box className={classes.addBox}>
              <LocalPhoneIcon sx={{ color: 'primary', mr: 1, my: 0.5 }} />
              <TextField
                placeholder="Phone Number"
                variant="standard"
                type="tel"
                name="number"
                inputRef={phoneRef}
                required
                onBlur={e => validatePhoneNumber(e.target.value)}
              />
              {phoneError && ( <span className={classes.addSpanBox}> {phoneError} </span> )}
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.formGroup}>
            <Button variant="contained" color="primary" type="submit"> Add contact </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
};
