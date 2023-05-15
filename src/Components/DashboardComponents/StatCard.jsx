import { LoginOutlined } from '@mui/icons-material';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const StatCard = () => {
  return (
      <Paper elevation={18} style={{ height:'20vh' }}>
        <Grid container>
          <Grid item md={6} p={2} align="left">
            <Typography fontWeight={600} fontSize={'20px'}>Statistics</Typography>
          </Grid>
          <Grid item md={6} p={2} align="right">Updated 1 month Ago</Grid>

          <Grid item md={3}>
            <Box p={3}>
              <Grid container>
                <Grid item md={4}></Grid>
                <Grid item md={3}>
                  <Box style={{ background:'#4060f99e',width:'40px',height:'40px',borderRadius:'50%',padding:'7px',color:'#fff' }} ><LoginOutlined/></Box>
                </Grid>
                <Grid item md={3}>
                            <Typography fontSize={'20px'} fontWeight={600}>250k</Typography>
                            <Typography fontSize={'14px'} fontWeight={300}>Sales</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box p={3}>
              <Grid container>
                <Grid item md={4}></Grid>
                <Grid item md={3}>
                  <Box style={{ background:'#4060f99e',width:'40px',height:'40px',borderRadius:'50%',padding:'7px',color:'#fff' }} ><LoginOutlined/></Box>
                </Grid>
                <Grid item md={3}>
                            <Typography fontSize={'20px'} fontWeight={600}>250k</Typography>
                            <Typography fontSize={'14px'} fontWeight={300}>Sales</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box p={3}>
              <Grid container>
                <Grid item md={4}></Grid>
                <Grid item md={3}>
                  <Box style={{ background:'#4060f99e',width:'40px',height:'40px',borderRadius:'50%',padding:'7px',color:'#fff' }} ><LoginOutlined/></Box>
                </Grid>
                <Grid item md={3}>
                            <Typography fontSize={'20px'} fontWeight={600}>250k</Typography>
                            <Typography fontSize={'14px'} fontWeight={300}>Sales</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={3}>
            <Box p={3}>
              <Grid container>
                <Grid item md={4}></Grid>
                <Grid item md={3}>
                  <Box style={{ background:'#4060f99e',width:'40px',height:'40px',borderRadius:'50%',padding:'7px',color:'#fff' }} ><LoginOutlined/></Box>
                </Grid>
                <Grid item md={3}>
                            <Typography fontSize={'20px'} fontWeight={600}>250k</Typography>
                            <Typography fontSize={'14px'} fontWeight={300}>Sales</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>


        </Grid>
      </Paper>
  );
};

export default StatCard;