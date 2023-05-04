import jwtDecode from 'jwt-decode';
import React, { createContext, useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const AuthContext = createContext();

const inital={
  token:'',
  user:{
    name:'',
    email:''
  }
}
const AuthProvidor = ({children}) => {
 const [user, setUser]=useState(inital);

 useEffect(()=>{
  const userData=localStorage.getItem('user');
  if(userData){
    setUser(JSON.parse(userData));
  }
 },[])


  return (
    <AuthContext.Provider value={{...user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth=()=>{
  return useContext(AuthContext)
}

export  {AuthProvidor,useAuth};