import { CheckBox } from '@mui/icons-material';
import { Avatar, Box, Button, Card, CardActions, CardContent, Container, CssBaseline, FormControlLabel, Grid, InputLabel, MenuItem, Modal, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useAuth } from '../../Contexts/UserContext';
import NgoModal from './NgoModal';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '', transform: 'scale(0.8)' }}
  >
  </Box>
)
const Ngo = () => {

  const {user}=useAuth();
  const [store,setStore] = useState([]);
  const [area,setArea] = useState([]);
  const [ngo,setNgo] = useState([]);
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(!open);


      useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.0.227/myPractisebackend/api/all-ngo');
   
         setNgo(response.data.data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);




 console.log(ngo,'ngo from ngo')

  

  

  return (
<Box>
      <Paper elevation={8}sx={{my:3}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> <h2 color="secondary">All Ngo List</h2></TableCell>
            <TableCell align="right"><Button onClick={handleOpen} variant="contained">Create Ngo</Button></TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </Paper>
    <TableContainer component={Paper} elevation={18} sx={{my:3}}>
             {/* <h3>{user.email}</h3>
        <h3>{user.name}</h3> */}

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ bgcolor: 'primary.main', p: 2 }}>
          <TableRow>
            <TableCell style={{ color:'#fff' }} >Ngo Name</TableCell>
            <TableCell style={{ color:'#fff' }} align='right'>Ngo Username</TableCell>
            <TableCell style={{ color:'#fff' }} align='left'>Ngo Address</TableCell>
            <TableCell style={{ color:'#fff' }} align='center' >Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ngo.map((ngos) => (
            <TableRow
              key={ngos.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {ngos.name}
              </TableCell>
              <TableCell align="right">{ngos.username} || {ngos.id}</TableCell>
              <TableCell align="left">{ngos.address}</TableCell>
              <TableCell align="center">
                <Button variant="outlined" component={Link} to={`/ngo/${ngos.id}`}>View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>


      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      
    <NgoModal open={open} setNgo={setNgo} ngo={ngo} setOpen={setOpen} handleClose={handleClose} ></NgoModal>
    </TableContainer>
    </Box>



  );
};

export default Ngo;