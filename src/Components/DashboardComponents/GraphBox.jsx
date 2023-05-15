import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const GraphBox = () => {
  return (
        <Paper elevation={18} style={{ height:'23vh' }} >
        <Grid container>
          <Grid item md={8}>
             <Box p={3}>
              {/* <h2>Congratulation John</h2>
              <p>You Have Won Gold Medel</p>
              <h2>$49.8k</h2> */}
              <Typography fontWeight={600}>Congratulation John</Typography>
              <Typography fontSize={'11px'} variant='subtitle'>You Have Won Gold Medel</Typography>
             </Box>
          </Grid>
        </Grid>
      </Paper>
  );
};

export default GraphBox;