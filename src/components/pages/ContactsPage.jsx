import { useEffect } from 'react';
import { useDispatch } from 'react-redux'; 
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { fetchContacts } from 'redux/contacts/operationsContacts';
import { ContactList } from '../ContactList/ContactList';
import { FilterContacts } from '../ContactFilter/FilterContacts';
import { ContactForm } from '../ContactForm/ContactForm'; 
import { useStyles } from 'components/style/Styles';

const ContactsPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch(); 
   
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={classes.myAgendadd}>
        <h1 className={classes.titleAgenda}>
          <ContactPhoneIcon className={classes.contactIcon} />
          Your phonebook
        </h1>
        <ContactForm />
      </div>
      <div className={classes.myAgenda}>
        <h3 className={classes.subtitleAgenda}>Contacts :</h3>
        <FilterContacts />
      </div> 
      <ContactList /> 
    </>
  );
};
export default ContactsPage;
