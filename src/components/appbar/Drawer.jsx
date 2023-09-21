import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Drawer, IconButton, List, ListItem, ListItemText,} from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { useStyles } from '../style/Styles';
import { UserMenu } from '../userMenu/UserMenu';
import { selectIsLoggedIn } from 'redux/auth/selectorsAuth';

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const alistItem = (
    <>
      <ListItem className={classes.listItem} onClick={() => setOpenDrawer(false)}>
        <ListItemText>
          <Link to="/login" className={classes.linkDrawer}> Login </Link>
        </ListItemText>
      </ListItem>
      <ListItem className={classes.listItem} onClick={() => setOpenDrawer(false)}>
        <ListItemText>
          <Link to="/register" className={classes.linkDrawer}> Sign Up </Link>
        </ListItemText>
      </ListItem>
    </>
  );

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List className={classes.mainDrawer}>
          <ListItem className={classes.listItem} onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={classes.linkDrawer}> Home </Link>
            </ListItemText>
          </ListItem>
          {isLoggedIn && (
            <>
              <ListItem className={classes.listItem} onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link to="/contacts" className={classes.linkDrawer}> Contacts </Link>
                </ListItemText>
              </ListItem>
              <ListItem className={classes.listItem} onClick={() => setOpenDrawer(false)}> <UserMenu />
              </ListItem>
            </>
          )}
          {!isLoggedIn && alistItem}
        </List>
      </Drawer>
      <IconButton  onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon}> <MenuOutlinedIcon /> </IconButton>
    </>
  );
}
export default DrawerComponent;
