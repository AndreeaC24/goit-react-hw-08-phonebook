import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, CssBaseline, Grid, Button, Container, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; 
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';  
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { useStyles } from '../style/Styles';
import { logIn } from 'redux/auth/operationsAuth';
import { validateEmail, validatePassword } from '../common/Validation';

const Login = () => {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    // Validare email
    setEmailError(validateEmail(form.elements.email.value));

    // Validare password
    setPasswordError(validatePassword(form.elements.password.value));

    if (!emailError && !passwordError) {
      dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      form.reset();
    }
  };
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar sx={{ bgcolor: '#275DBA'}}> <LockOutlinedIcon /> </Avatar>
          <Typography variant="h4" className={classes.title}> Log in </Typography>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              autoComplete="email"
              autoFocus
              InputLabelProps={{
                classes: {
                  root: classes.labelMargin,
                },
              }}
              onBlur={e => { setEmailError(validateEmail(e.target.value)); }}
              helperText={emailError}
              error={!!emailError}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              type={visible ? 'text' : 'password'}
              autoComplete="current-password"
              InputLabelProps={{
                classes: {
                  root: classes.labelMargin,
                },
              }}
              InputProps={{
                endAdornment: (
                  <span className={classes.visibilityIcon} onClick={() => setVisible(!visible)}>
                    {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </span>
                ),
              }}
              onBlur={e => { setPasswordError(validatePassword(e.target.value)); }}
              helperText={passwordError}
              error={!!passwordError}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submitBtn}
            > Sign In
            </Button>
            <Grid container className={classes.account}>
                <RouterLink
                  component={RouterLink}
                  to="/register" 
                  className={classes.linkBtn}> 
                  {"Don't have an account? Sign Up"}
                </RouterLink>
              </Grid>
          </form>
        </div>
      </Container>
    </>
  );
};
export default Login;
