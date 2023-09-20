import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { useStyles } from '../style/Styles';
import { logIn } from 'redux/auth/operationsAuth';
import { validateEmail, validatePassword } from '../common/Validation';

const Login = () => {
  const classes = useStyles();
  const [password, setPassword] = useState('');
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
          <Avatar className={classes.avatar}> <LockOutlinedIcon /> </Avatar>
          <Typography component="h1" variant="h5"> Log in </Typography>
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
              onChange={e => setPassword(e.target.value)}
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
              className={classes.submit}
            > Sign In
            </Button>
            <Grid container className={classes.account}>
              <Link href="/register" variant="body2"> {"Don't have an account? Sign Up"} </Link>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
};
export default Login;
