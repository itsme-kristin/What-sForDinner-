import React from 'react';
import { Grid } from '@mui/material';
import '../App.css';




const Header = () => {
  return (
    <Grid container height='250px' className='header'>
      <h1> What's For Dinner?</h1>
    </Grid>
  );
}

export default Header;