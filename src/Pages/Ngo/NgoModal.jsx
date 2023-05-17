import { CheckBox } from '@mui/icons-material';
import { Avatar, Box, Button, Card, CardActions, CardContent, Container, CssBaseline, FormControlLabel, Grid, InputLabel, MenuItem, Modal, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useAuth } from '../../Contexts/UserContext';

const NgoModal = ({open,handleClose,setOpen,setNgo,ngo}) => {

  

  const [loading,setLoading] = useState(false);

  const [dataarea, setDataarea] = useState([]);
  const [ngoData, setNgoData] = useState([]);

  const [selectedValue, setSelectedValue] = useState('');

  

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.0.227/myPractisebackend/api/all-area');
        setDataarea(response.data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  useEffect(()=>{
    setNgoData(ngo);

  },[ngo])




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 2,
  };


  //employee
  const [employee, setEmployee] = useState(null);
  const [postition, setPostition] = useState(null);
  const [salary, setSalary] = useState(null);

  const stringRegex = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/;


  const onChangeArea = (event)=>{
    event.preventDefault();

    setSelectedValue(event.target.value);
    // const newarea = event.target.value;
    // setSelectArea(newarea);
    // console.log(selectArea);
  }

  const createOnClick = async (e) => {
    e.preventDefault();
    const area_id = e.target.area.value;
    const username = e.target.username.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const address = e.target.address.value;



    // const newNgo = {
      
    // }

      //   axios.post('http://192.168.0.227/myPractisebackend/api/create-ngo', areaID,userName,userEmail,userPassword,userAddress)
      // .then((response) => {
      //   // Handle the response data
      //   console.log(response.message);
      // })
      // .catch((error) => {
      //   // Handle any errors
      //   console.error(error);
      // });


const resp = await axios.post('http://192.168.0.227/myPractisebackend/api/create-ngo',{
area_id,username,name,email,password,address
     })


     
    

     setNgo([...ngo,{
   
      username : e.target.username.value,
      name : e.target.name.value,
      email : e.target.username.value,
      address : e.target.address.value
 
     }])

     setOpen(false)
    // setOpen(false);
    toast.success("New Employee Created")


  //   if (areaID.trim() === '') {
  //     setEmployee('Please Enter Employee Name');

  //     return toast.error(employee, {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   }
  //  else if (userName.trim() === '') {
  //     setPostition('Please Enter Postition');

  //     return toast.error(postition, {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   }
  //  else if (userEmail.trim() === '') {
  //     setSalary('Please Enter Salary');

  //     return toast.error(salary, {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   }
  //  else if (userPassword.trim() === '') {
  //     setSalary('Please Enter Salary');

  //     return toast.error(salary, {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   }
  //  else if (userAddress.trim() === '') {
  //     setSalary('Please Enter Salary');

  //     return toast.error(salary, {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //   }
  }

  // useEffect(() => {
  //   setLoading(true);
  //   try {
  //     (async () => {
  //       const response = await axios.get('http://192.168.0.227/myPractisebackend/api/all-area');
  //       console.log(response);
  //       if (response.success) {
  //         setDataarea(response.data);
  //         setLoading(false);
  //       } else {
  //         setLoading(false);
  //       }
  //     })();
  //   } catch (error) {
  //     setLoading(false);
  //   }
  // }, []);
  return (
    <div>
            <form onSubmit={createOnClick}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  component="form"
                  noValidate
                  sx={{ mt: 0 }}
                >
                  <h2>Create New Ngo</h2>

                  <Grid container spacing={2}>
                                        <Grid item xs={12}>
           <InputLabel id="demo-simple-select-label">Select Area</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    name="area"
    value={selectedValue}
    label="Select Area"
    onChange={onChangeArea}
    style={{ width:'100%' }}
  >
        {dataarea.map((areas) => (
          <MenuItem key={areas.id} value={areas.id}>
            {areas.name}
          </MenuItem>
        ))}
    {/* <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem> */}
  </Select>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="username"
                        label="User Name"
                        name="username"
                        autoComplete="User Name"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                      />
                    </Grid>
                    
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="password"
                        label="password"
                        name="password"
                        autoComplete="password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="address"
                        label="Address"
                        name="address"
                        autoComplete="address"
                      />
                    </Grid>

                  </Grid>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Create
                  </Button>

                </Box>
              </Box>
            </Container>
          </Box>
        </Modal>
      </form>
    </div>
  );
};

export default NgoModal;