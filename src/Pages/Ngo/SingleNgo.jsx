import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Avatar, Box, Grid, Paper, Tab, Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TabsGet from './TabsGet';
import Congrats from '../../Components/DashboardComponents/Congrats';

const SingleNgo = () => {

  const getDetail = useLoaderData();
  return (

    <div>
      {/* <h1>{getDetail.data[0].name}</h1> */}

      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <TabsGet></TabsGet>
          <Grid container spacing={2} sx={{ my: 2 }}>
            {/* <Grid item xs={12} md={12}>
              <TabsGet></TabsGet>
            </Grid> */}
          </Grid>
        </Grid>
        <Grid item xs={6} md={4}>
          <Congrats></Congrats>
        </Grid>
      </Grid>


    </div>
  );
};

export default SingleNgo;