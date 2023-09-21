import React, { useEffect, useState } from 'react';
import { Grid, Typography, Fade } from '@mui/material';
import imageSvg from './illustration.svg';

import { useStyles } from '../../style/Styles';

const Home = () => {
  const classes = useStyles();
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimationComplete(true);
    }, 500);
  }, []);

  return (
    <div className={classes.containerAnimation}>
      <Grid container>
        <Grid item xs={12} className={classes.formContainer}>
        <Fade in={animationComplete} timeout={1000}>
          <img
            src={imageSvg}
            alt="illustration"
            className={classes.svgAnimation}
          />
          </Fade>
          <>
          <Fade in={animationComplete} timeout={1000}>
            <Typography
              variant="h4"
              gutterBottom
              className={`${classes.welcomeText} ${animationComplete ? classes.textAnimation : ''}`}
            >
              Welcome to PhoneBook App
            </Typography>
            </Fade>
            <Fade in={animationComplete} timeout={1000}>
            <Typography 
              gutterBottom
              className={`${classes.otherText} ${animationComplete ? classes.textAnimation : ''}`}
            >
              This app is a product of React.js, Redux Toolkit, Axios, and other secret ingredients
            </Typography>
            </Fade>
          </>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
