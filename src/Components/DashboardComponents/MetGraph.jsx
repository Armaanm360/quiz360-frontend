import { Grid } from '@mui/material';
import React from 'react';
import GraphBox from './GraphBox';

const MetGraph = () => {
  return (
<Grid container spacing={4}>
  <Grid item xs={6} md={6}>
    <GraphBox/>
  </Grid> 
  <Grid item xs={6} md={6}>
    <GraphBox/>
  </Grid> 
  <Grid item xs={6} md={12}>
    <GraphBox/>
  </Grid> 
</Grid>
  );
};

export default MetGraph;