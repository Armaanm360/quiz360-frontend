import { LoginOutlined } from '@mui/icons-material';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Congrats = () => {
  return (
      <Paper elevation={18} style={{ height:'20vh' }} >
        <Grid container>
          <Grid item md={8}>
             <Box p={3}>
              {/* <h2>Congratulation John</h2>
              <p>You Have Won Gold Medel</p>
              <h2>$49.8k</h2> */}
              <Typography fontWeight={600}>Congratulation John</Typography>
              <Typography fontSize={'11px'} variant='subtitle'>You Have Won Gold Medel</Typography>

           <Box mt={3}>
                           <Typography fontSize={'24px'} fontWeight={600}>$49.8k</Typography>
             <Button variant='contained' color='success'>View Sales</Button>
           </Box>
             </Box>
          </Grid>
          <Grid item md={4}>
             <Box pt={2}>
               <img style={{ width:'100px' }} src="https://cdn-icons-png.flaticon.com/512/539/539548.png" alt="" />
             </Box>
          </Grid>
        </Grid>
      </Paper>
  );
};

export default Congrats;