import {Box, Button, Card, CardActions, CardContent, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import NewComp from './NewComp';
import Dashcard from '../../Components/DashboardComponents/FlexboxCardComponent';
import FlexboxCardComponent from '../../Components/DashboardComponents/FlexboxCardComponent';
import NewCard from '../../Components/DashboardComponents/NewCard';
import JustBox from '../../Components/DashboardComponents/JustBox';
import Congrats from '../../Components/DashboardComponents/Congrats';
import StatCard from '../../Components/DashboardComponents/StatCard';
import GraphBox from '../../Components/DashboardComponents/GraphBox';
import ProGraph from '../../Components/DashboardComponents/ProGraph';
import MetGraph from '../../Components/DashboardComponents/MetGraph';



const Dashboard = () => {
  const locas = localStorage.getItem("name");
  return (
   <>
<Grid container spacing={4} mt={2} >
  <Grid item xs={6} md={4}>
    <Congrats/>
  </Grid> 
  <Grid item xs={6} md={8}>
     <StatCard></StatCard>
  </Grid> 
  <Grid item xs={6} md={4}>
    <MetGraph></MetGraph>
  </Grid> 
  <Grid item xs={6} md={8}>
       <ProGraph></ProGraph>
  </Grid> 
  <Grid item xs={6} md={8}>
       <GraphBox></GraphBox>
  </Grid> 
  <Grid item xs={6} md={4}>
    <GraphBox></GraphBox>
  </Grid> 
</Grid>

   </>
  );
};

export default Dashboard;