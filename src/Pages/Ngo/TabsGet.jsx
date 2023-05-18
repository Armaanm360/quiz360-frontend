import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Paper, Tab, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import SimpleNgo from './SimpleNgo';
import Congrats from '../../Components/DashboardComponents/Congrats';

const TabsGet = () => {


  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={6} sx={{ m: 3 }}>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Name" value="1" />
              <Tab label="Address" value="2" />
              <Tab label="Email" value="3" />
              <Tab label="Population" value="4" />
              <Tab label="Officers" value="5" />
              <Tab label="Education" value="6" />
              <Tab label="Speciality" value="7" />
              <Tab label="Location" value="8" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <SimpleNgo />
          </TabPanel>
          <TabPanel value="2">
            <Box>
              <Typography gutterBottom variant="h5" component="div" sx={{ color: '#00376e' }}>
                Address of Ngo - Ngo Name
              </Typography>
              <Typography variant="body2" color="text.secondary">
                জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে। বাঘ ভালুক তার জীবনযাত্রার পনেরো- আনা মূলধন নিয়ে আসে প্রকৃতির মালখানা থেকে। জীবরঙ্গভূমিতে মানুষ এসে দেখা দেয় দুই শূন্য হাতে মুঠো বেঁধে।
                মানুষ আসবার পূর্বেই জীবসৃষ্টিযজ্ঞে প্রকৃতির ভূরিব্যয়ের পালা শেষ হয়ে এসেছে।
              </Typography>
            </Box>
          </TabPanel>
          <TabPanel value="3">
            <Box>
              <Typography gutterBottom variant="h5" component="div" sx={{ color: '#00376e' }}>
                Email of Ngo - Ngo Email
              </Typography>
              <Typography variant="body2" color="text.secondary">
                জীবের মধ্যে সবচেয়ে সম্পূর্ণতা মানুষের। কিন্তু সবচেয়ে অসম্পূর্ণ হয়ে সে জন্মগ্রহণ করে। বাঘ ভালুক তার জীবনযাত্রার পনেরো- আনা মূলধন নিয়ে আসে প্রকৃতির মালখানা থেকে। জীবরঙ্গভূমিতে মানুষ এসে দেখা দেয় দুই শূন্য হাতে মুঠো বেঁধে।
              </Typography>
            </Box>
          </TabPanel>
          <TabPanel value="4">
            <SimpleNgo />
          </TabPanel>
          <TabPanel value="5">
            <SimpleNgo />
          </TabPanel>
          <TabPanel value="6">
            <SimpleNgo />
          </TabPanel>
          <TabPanel value="7">
            <SimpleNgo />
          </TabPanel>
          <TabPanel value="8">
            <SimpleNgo />
          </TabPanel>
        </TabContext>
      </Box>
    </Paper>
  );
};

export default TabsGet;