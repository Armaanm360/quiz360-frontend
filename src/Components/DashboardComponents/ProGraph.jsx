import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const ProGraph = () => {
  return (
        <Paper elevation={18} style={{ height:'49vh' }} >
        <Grid container>
          <Grid item md={8}>
             <Box p={3}>g
              <Typography fontWeight={600}>Congratulation John</Typography>
              <Typography fontSize={'11px'} variant='subtitle'>You Have Won Gold Medel</Typography>
             </Box>
          </Grid>
        </Grid>
      </Paper>
  );
};

export default ProGraph;