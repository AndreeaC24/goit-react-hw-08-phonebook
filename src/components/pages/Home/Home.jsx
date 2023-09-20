import React from 'react';
import { useTrail, animated, useSpring } from 'react-spring';
import { Grid, Typography } from '@material-ui/core';
import imageSvg from './illustration.svg';
import { useStyles } from 'components/style/Styles';

const Home = () => {
  const classes = useStyles();
  const svgProps = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    config: { tension: 400, friction: 20 },
    delay: 500,
  });

  const items = [
    { text: 'Welcome to PhoneBook App', delay: 3000 },
    { text: 'This app is a product of React.js, Redux Toolkit, Axios, and other secret ingredients', delay: 4000,},
  ];

  const trail = useTrail(items.length, {
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    delay: items.map((_, index) => items[index].delay),
  });

  return (
    <div className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.formContainer}>
          <animated.img src={imageSvg} alt="illustration" className={classes.svg} style={svgProps} />
          <div className={classes.message}>
            {trail.map(({ opacity, transform }, index) => (
              <animated.div key={index} style={{ opacity, transform }}>
                <Typography variant="h4" gutterBottom className={ index === 0 ? classes.welcomeText : classes.otherText }>
                  {items[index].text}
                </Typography>
              </animated.div>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Home;
