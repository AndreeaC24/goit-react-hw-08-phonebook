import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge'; 

export const useStyles = makeStyles(theme => ({ 
  navbar: {
    backgroundColor: 'white',
    position: 'static',
    top: '0',
    left: '0',
    width: '100%',
    zIndex: 1000,
  },
  navlinks: {
    marginLeft: theme.spacing(3),
    paddingTop: theme.spacing(3),
    paddingRight: theme.spacing(5),
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    flexGrow: 1,
    cursor: 'pointer',
    padding: theme.spacing(5),
  },
  link: {
    textDecoration: 'none',
    color: '#1B3668',
    fontSize: '20px',
    marginLeft: theme.spacing(10),
    fontWeight: 'normal',
    transition: 'font-weight 0.3s ease',
    '&:hover': {
      fontWeight: 'bold',
    },
  },
  linkDrawer: {
    textDecoration: 'none',
    color: '#1B3668',
    fontSize: '18px',
    padding: theme.spacing(3),
    '&:hover': {
      borderBottom: '1px solid #1B3668',
    },
  },
  mainDrawer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    height: '100%', 
    margin: theme.spacing(2),
  },
  listItem: { 
    textAlign: 'center',
     margin: theme.spacing(1), 
  },
  icon: {
    color: '#275DBA',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  smallLogo: {
    width: '120px',
  },
  largeLogo: {
    width: '270px',
  },
  noElevation: {
    boxShadow: 'none', 
  }, 
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%',
    minHeight: '75vh',
    [theme.breakpoints.down('sm')]: {
      minHeight: '50vh',
    },
  },
  formContainer: {
    padding: theme.spacing(3),
    textAlign: 'center',
    maxWidth: '100%',
    margin: '30px auto',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%', 
    },
  },
  svgAnimation: {
    marginTop: theme.spacing(5),     
    width: '500px',
    height: 'auto', 
    transform: 'scale(0.8)',
    transition: 'opacity 1s, transform 1s',
    [theme.breakpoints.down('sm')]: {
      width: '300px', 
    },
  },
  welcomeText: {
    padding: theme.spacing(6),
    borderRadius: theme.shape.borderRadius,
    fontSize: '42px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '32px',
      padding: theme.spacing(3),
    },
    fontWeight: '700',
    color: '#bec1bd',
    textStroke: '2px #fff',
    WebkitTextStroke: '1px #fff',
    background: `linear-gradient(to right, #1B3668, transparent), linear-gradient(to left, #1B3668, transparent), linear-gradient(to top, #1B3668, transparent), linear-gradient(to bottom, #1B3668, transparent)`,
    backgroundBlendMode: 'multiply',    
    transform: 'translateY(20px)',
    transition: 'opacity 1s, transform 1s',
  },
  otherText: {
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    fontSize: '20px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
      padding: theme.spacing(1),
    },
    color: '#275DBA',  
    transform: 'translateY(20px)',
    transition: 'opacity 1s, transform 1s',
  }, 
  containerAnimation: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    paddingTop: theme.spacing(20),
  }, 
  paper: {
    marginTop: theme.spacing(25),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }, 
  form: { 
    width: '100%',
    marginTop: theme.spacing(4),
  },
  submitBtn: { 
    backgroundColor: theme.palette.primary.dark,
    color: '#FFF',
    padding: theme.spacing(2), 
    marginTop: theme.spacing(2),
  },
  labelMargin: {
    marginTop: '5px',
  },
  input: {
    margin: theme.spacing(1),
  },
  account: {
    display: 'flex',
    justifyContent: 'end',
    marginTop: theme.spacing(2), 
  },
  linkBtn:{
    color:'black',
    textDecoration:'none',
  },
  title:{
    marginTop: theme.spacing(2),
  },
  loginContainer: {
    border: '2px solid #ccc',
    borderRadius: '10px',
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
  },
  userName: {
    color: 'black',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: '700',
    fontSize: '18px',
  },
  myAgendadd: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(20),
  },
  titleAgenda: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '46px',
    fontFamily: 'Cooper Black, sans-serif',
    color: '#275DBA',
    textAlign: 'center',
    marginBottom: theme.spacing(10),
  },
  myAgenda: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: theme.spacing(7),
    padding: theme.spacing(2),
  },
  subtitleAgenda: {
    fontSize: '27px',
    fontFamily: 'Cooper Black, sans-serif',
    color: '#275DBA',
  },
  contactIcon: {
    fontSize: '80px',
    padding: theme.spacing(3), 
    color: '#275DBA',
  },
  formGroup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(2),
  },
  addButton: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  filterForm: {
    marginLeft: theme.spacing(1),
  },
  tabelContact: {
    width: '100%',
    maxWidth: 450,
    marginLeft: theme.spacing(8),
    paddingTop: theme.spacing(5), 
  }, 
  nameContact: {
    fontFamily: 'Elephant, sans-serif',
    fontSize: '22px',
    color: '#275DBA', 
  },
  phoneContact: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  phoneNumber: {
    color: 'black',
    fontSize: '17px',
    marginLeft: theme.spacing(1), 
  },
  inputEdit: {
    textAlign: 'center',
  }, 
  deleteButton: {
    marginTop: theme.spacing(2),
  },
  addBox: {
    display: 'flex',
    alignItems: 'flex-end',
    position: 'relative',
  },
  addSpanBox: {
    position: 'absolute',
    top: '100%',
    left: 0,
    color: 'red',
    fontSize:'12px',
  }, 
  buttonNF:{
    marginTop: theme.spacing(2),
  },   
}));

export const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    // padding: '10px',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
