import { Button, Card, CardContent, Container, CssBaseline, Grid, TextField } from '@mui/material';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Cookies from 'universal-cookie';
import jwtDecode from 'jwt-decode';
import { useAuthContext } from '../../Contexts/UserContext';
import { type } from 'os';
import { LOGIN_SUCCESS } from '../../Contexts/Reducer';


const Login = () => {
const [msg, setMsg] = useState('');

const{dispatch}=useAuthContext()

const [name, setName] = useState('');
const cookies = new Cookies();


    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [remember, setRemember] = useState(false);
    // const { setErrors, renderFieldError, message, setMessage, navigate } = useForm();
    // const makeRequest = (e) => {
    //     e.preventDefault();
    //     setErrors(null);
    //     setMessage('');


    //        axios.post('/api/login', payload, {headers: { 'Accept': 'application/json' } }).then(response => {
    //             console.log(response.data.user);
    //             if(response.data.user) {
    //                 alert('Login success');
    //                 navigate('/');
    //             }
    //         }).catch(error => {
    //             console.log(error);
    //             if(error.response) {
    //                 if (error.response.data.message) {
    //                     setMessage(error.response.data.message);
    //                 }
    //                 if (error.response.data.errors) {
    //                     setErrors(error.response.data.errors);
    //                 }
    //             }
    //         });


    //             const resp = await axios.post(postUrl,{
    //   employee_name,
    //   postition_name,
    //   insalary
    //  })
    //     // make request first to sanctum/csrf-cookie
    //     axios.get('/sanctum/csrf-cookie').then(() => {
    //        const payload = {
    //           email,
    //           password
    //        };
    //         if(remember) {
    //             payload.remember = true;
    //         }

    //     });
    // };

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

       setName(data.data.name)
       cookies.set('token', data.data.access_token);
       localStorage.setItem('name',name);


  
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
                      <h3>{name}</h3>
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
                            <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Create
                  </Button>

               </form>    
      </CardContent>
    </Card>
  </Container>
 </React.Fragment>   



  );
};

export default Login;