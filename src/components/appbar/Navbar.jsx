import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppBar, Toolbar, Typography, useTheme, useMediaQuery, CssBaseline,} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';  

import DrawerComponent from './Drawer';
import logoSvg from './logo.svg';
import { UserMenu } from '../userMenu/UserMenu';
import { useStyles } from '../style/Styles';
import { selectIsLoggedIn } from 'redux/auth/selectorsAuth';

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme(); 
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isXSmall = useMediaQuery('(max-width:270px)');
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar className={isXSmall ? classes.noElevation : ''}>   
      <header className={classes.navbar}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          <img src={logoSvg} alt="Logo" className={isSmall ? classes.smallLogo : classes.largeLogo}/>
        </Typography>
        {isMedium ? ( <DrawerComponent /> ) : (
          <div className={classes.navlinks}>
            <NavLink to="/" className={classes.link}> Home </NavLink>
            {isLoggedIn && ( <NavLink to="/contacts" className={classes.link}> Contacts </NavLink>
            )}
            {!isLoggedIn && (
              <>
                <NavLink to="/login" className={classes.link}> <LoginIcon /> Login </NavLink>
                <NavLink to="/register" className={classes.link}> <HowToRegIcon /> Sign Up </NavLink>
              </>
            )}
          </div>
        )}
        <div>{isLoggedIn && !isMedium && <UserMenu />}</div>
      </Toolbar>
      </header>
    </AppBar>
  );
};

export default Navbar;
