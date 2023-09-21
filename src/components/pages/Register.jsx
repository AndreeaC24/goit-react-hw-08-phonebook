import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, CssBaseline, Grid, Button, Container, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; 
import AccountCircleIcon from '@mui/icons-material//AccountCircle'; 
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { register } from 'redux/auth/operationsAuth';
import { validateName, validateEmail, validatePassword, } from '../common/Validation';
import { useStyles } from '../style/Styles';


const Register = () => {
  const classes = useStyles(); 
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
  
    setNameError(validateName(form.elements.name.value));
    setEmailError(validateEmail(form.elements.email.value));
    setPasswordError(validatePassword(form.elements.password.value));

    if (!nameError && !emailError && !passwordError) {
      dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      form.reset();
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar sx={{ bgcolor: '#275DBA'}}> <AccountCircleIcon /> </Avatar>
        <Typography variant="h4" className={classes.title}> Sign Up </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            InputLabelProps={{
              classes: {
                root: classes.labelMargin,
              },
            }}
            onBlur={e => { setNameError(validateName(e.target.value)); }}
            helperText={nameError}
            error={!!nameError}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
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
          > Sign up
          </Button>
          <Grid container className={classes.account}>
              <RouterLink
                component={RouterLink}
                to="/login"
                className={classes.linkBtn}> 
               {"Login"}
              </RouterLink>
            </Grid> 
        </form>
      </div>
    </Container>
  );
};
export default Register;
