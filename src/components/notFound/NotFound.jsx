 
import React from 'react';
import { Box, Button, Container, Typography, Link } from '@mui/material';
import Grid from '@mui/material/Grid'; 
import { useStyles } from 'components/style/Styles';

export const NotFound = () => {  
  const classes = useStyles();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h1"> 404 </Typography>
            <Typography variant="h6"> The page you're looking for doesn't exist. </Typography>
              <Link href="/">
                <Button variant="contained" className={classes.buttonNF}> {"Home"} </Button>
              </Link>
          </Grid>
          <Grid xs={6}>
            <img src='https://img.freepik.com/free-vector/page-found-with-people-connecting-plug-concept-illustration_114360-1939.jpg'              alt=""
              width={420} height={350}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
