import { Button, Card, CardContent, Container, CssBaseline, Grid, TextField } from '@mui/material';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Cookies from 'universal-cookie';
import jwtDecode from 'jwt-decode';
import { useAuth } from '../../Contexts/UserContext';
import { Link, json, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';


const Login = () => {
const [msg, setMsg] = useState('');
const {setUser, user}=useAuth();

const [loading,setLoading] = useState(false);



const navigate = useNavigate();
  const submitOnClick = async(e)=>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
   


    try {
      const {data} = await axios.post('http://192.168.0.227/myPractisebackend/api/user-login',{
      email,
      password
     });


    if(data.success){
    const userData={
      token:data.data.access_token,
      user:{
        name:data.data.name,
        email:data.data.email
      }
    }
    
    navigate('/')

    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData)
    }

    } catch (err) {
      
      console.log(err?.response?.data?.message)
    }
    

  }
  return (

 <React.Fragment>
  <CssBaseline/>
  <Container maxWidth="sm">
  <Card sx={{ minWidth: 275 }}>
      <CardContent>

             <form onSubmit={submitOnClick}>
      <Grid container spacing={2}>
                    <Grid item xs={12} className=''>
                      <h3>Hello Login Form</h3>
                      <Link to='/employees'>Employee</Link>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="email"
                        label="email"
                        name="email"
                        type='email'
                        autoComplete="email"
                      />
                    </Grid>
                    <h4>{msg}</h4>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        name="password"
                        label="password"
                        id="password"
                        autoComplete="password"
                      />
                    </Grid>
                  </Grid>

                       <LoadingButton loading={loading} variant="contained" type="submit" fullWidth sx={{ mt: 3, mb: 2 }}>
  Submit
</LoadingButton>


               </form>    
      </CardContent>
    </Card>
  </Container>
 </React.Fragment>   



  );
};

export default Login;