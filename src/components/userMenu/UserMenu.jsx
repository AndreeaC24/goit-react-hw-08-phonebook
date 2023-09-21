import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Avatar, Badge, Stack, Button, useTheme, useMediaQuery } from '@mui/material';
import { indigo } from '@mui/material/colors';
import LogoutIcon from '@mui/icons-material/Logout';

import { logOut } from '../../redux/auth/operationsAuth';
import { useStyles, StyledBadge } from '../style/Styles';

export const UserMenu = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const { name } = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div className={classes.loginContainer}>
      <Stack
        direction={isMedium ? 'column' : 'row'}
        alignItems={isMedium ? 'center' : 'center'}
        spacing={2}
      >
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
          sx={{ marginRight: isMedium ? 0 : 1 }}
        >
          <Avatar sx={{ bgcolor: indigo[500] }} className={classes.avatarName}>
            {name.slice(0, 1).toUpperCase()}
          </Avatar>
          <Badge overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          ></Badge>
        </StyledBadge>

        <p className={classes.userName}>{name}</p>
        <Button
          variant="contained"
          size="small"
          startIcon={<LogoutIcon />}
          color="primary"
          onClick={() => dispatch(logOut())}
        >
          Log out
        </Button>
      </Stack>
    </div>
  );
};
