import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import LoginIcon from '@mui/icons-material/Login';
import './login.css';
import { loginAPI } from '../../APIs/auth/login';

function Login(){ 
  const history = useHistory();
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const login = () => {
    dispatch(loginAPI( username, password, history ));
  }
  

  return(
    <div className='login'>
        <Card sx={{ width: '500px', margin:'0 auto', p:3,backgroundColor: '#F6EAE8', textAlign:'center'}}>
            <Typography gutterBottom variant="h5" component="div">
                <b>Login</b>
            </Typography>
            <CardContent>
                <TextField
                    name="username"
                    required
                    id="username"
                    label="Username"
                    autoFocus
                    size='small'
                    onChange={(e)=>setUsername(e.target.value)} 
                    value={username}
                />
                <br/>
                <br/>
                <TextField
                    name="password"
                    required
                    id="password"
                    label="Password"
                    size="small"
                    type="password"
                    onChange={(e)=>setPassword(e.target.value)} 
                    value={password}
                />
                <br/>
                <br/>
                <Button endIcon={<LoginIcon/>} size="small" variant="contained" color="success" onClick={login}>
                    <b>Login</b>
                </Button>
            </CardContent>
        </Card>
    </div>
  )
}

export default Login;